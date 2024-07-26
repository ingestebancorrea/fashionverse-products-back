"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
const productstates_service_1 = require("../productstates/productstates.service");
const inventories_service_1 = require("../inventories/inventories.service");
const enums_1 = require("../common/enums");
const user_service_1 = require("../users/user.service");
const categories_service_1 = require("../categories/categories.service");
const brands_service_1 = require("../brands/brands.service");
const aws_sdk_1 = require("aws-sdk");
const stores_service_1 = require("../stores/stores.service");
let ProductsService = class ProductsService {
    constructor(productRepository, productStateService, inventoryService, userService, categoryService, brandService, storesService) {
        this.productRepository = productRepository;
        this.productStateService = productStateService;
        this.inventoryService = inventoryService;
        this.userService = userService;
        this.categoryService = categoryService;
        this.brandService = brandService;
        this.storesService = storesService;
    }
    async create(token, createProductsDto) {
        try {
            for (const createProductDto of createProductsDto) {
                const userUuid = await this.userService.extractIdUserOfToken(token);
                const idProductState = (await this.productStateService.findByAlias("ACT")).id;
                const objProduct = this.productRepository.create(createProductDto);
                objProduct.productstate_id = idProductState;
                objProduct.user_uuid = userUuid;
                const productSaved = await this.productRepository.save(objProduct);
                for (const inventory of createProductDto.inventories) {
                    const objInventory = {
                        "size_id": inventory.size_id,
                        "available_quantity": inventory.available_quantity
                    };
                    await this.inventoryService.create(objInventory, productSaved.id.toString());
                }
            }
            return {
                statusCode: 201,
                message: enums_1.SuccessMessages.PRODUCT_CREATED,
            };
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException(enums_1.ErrorMessages.DEFAULT_REQUEST_EXCEPTION);
        }
    }
    async findAll(token, paginationDto) {
        const { limit = 5, offset = 0, name, category_id, brand_id } = paginationDto;
        const userUuid = await this.userService.extractIdUserOfToken(token);
        const arrayProduct = [];
        const productsSaved = await this.productRepository.find({
            where: {
                user_uuid: userUuid,
                name: name && (0, typeorm_2.Like)(`%${name}%`),
                category_id: category_id && category_id,
                brand_id: brand_id && brand_id
            },
            skip: offset,
            take: limit,
            order: { id: 'DESC' }
        });
        for (const product of productsSaved) {
            const productAux = {
                "id": product.id,
                "name": product.name,
                "category": null,
                "price": product.price,
                "brand": null,
                "sizes": []
            };
            const objCategory = await this.categoryService.findOne(product.category_id);
            productAux["category"] = objCategory ? objCategory : null;
            const objBrand = await this.brandService.findOne(product.brand_id);
            productAux["brand"] = objBrand ? objBrand : null;
            const arraySizes = await this.inventoryService.findByProduct(product.id);
            productAux["sizes"] = arraySizes ? arraySizes : [];
            arrayProduct.push(productAux);
        }
        return arrayProduct;
    }
    findOne(id) {
        return `This action returns a #${id} product`;
    }
    update(id, updateProductDto) {
        return `This action updates a #${id} product`;
    }
    async uploadFiles(createFolderStructureDto, filesObject) {
        try {
            const files = filesObject.files;
            if (!files || files.length === 0) {
                throw new common_1.BadRequestException('No files uploaded');
            }
            const s3 = new aws_sdk_1.S3({
                region: process.env.AWS_REGION,
                apiVersion: "latests",
                maxRetries: 3,
                credentials: {
                    accessKeyId: process.env.AWS_ACCESS_KEY,
                    secretAccessKey: process.env.AWS_SECRET_KEY
                }
            });
            const store = await this.storesService.findStoreByUuid();
            const storeNameReplaced = store.name.replace(" ", "_");
            const category = await this.categoryService.findOne(createFolderStructureDto.category_id);
            const brand = await this.brandService.findOne(createFolderStructureDto.brand_id);
            const baseName = `${storeNameReplaced}/${category}/${brand}`;
            const uploadResults = await Promise.all(files.map(async (file) => {
                const fileName = file.originalname;
                const params = {
                    Bucket: process.env.AWS_BUCKET_NAME,
                    Key: `${baseName}/${fileName}`,
                    Body: file.buffer,
                    ACL: "public-read",
                    ContentType: file.mimetype
                };
                try {
                    const s3Response = await s3.upload(params).promise();
                    return { url: s3Response.Location, ubication: s3Response.Key };
                }
                catch (e) {
                    throw new common_1.InternalServerErrorException(e);
                }
            }));
            return uploadResults;
        }
        catch (e) {
            console.log("Error:", e);
            throw new common_1.InternalServerErrorException(enums_1.ErrorMessages.DEFAULT_REQUEST_EXCEPTION);
        }
    }
    async listFiles(prefixes) {
        const response = {
            result: null
        };
        const baseUrl = process.env.AWS_OBJECT_URL;
        const gallery = [];
        const s3 = new aws_sdk_1.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_KEY
        });
        const store = await this.storesService.findStoreByUuid();
        const storeNameReplaced = store.name.replace(" ", "_");
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Prefix: `${storeNameReplaced}/${prefixes.category}/${prefixes.brand}/`
        };
        await s3.listObjectsV2(params)
            .promise()
            .then(data => {
            data.Contents.map(image => {
                const nameSplit = image.Key.split("/");
                let tag = "";
                if (nameSplit.length > 1) {
                    tag = nameSplit[0];
                }
                if (image.Size !== 0) {
                    const imageInfo = {
                        src: baseUrl + image.Key,
                        name: image.Key,
                        alt: image.Key,
                        tag: tag
                    };
                    gallery.push(imageInfo);
                }
            });
        })
            .catch((err) => {
            throw err;
        });
        if (gallery.length === 0)
            throw new common_1.NotFoundException(enums_1.ErrorMessages.RESOURCE_NOT_FOUND);
        response.result = gallery;
        return response;
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        productstates_service_1.ProductstatesService,
        inventories_service_1.InventoriesService,
        user_service_1.UsersService,
        categories_service_1.CategoriesService,
        brands_service_1.BrandsService,
        stores_service_1.StoresService])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map