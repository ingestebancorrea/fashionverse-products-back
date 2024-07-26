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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const update_product_dto_1 = require("./dto/update-product.dto");
const swagger_1 = require("@nestjs/swagger");
const role_decorator_1 = require("../auth/role/role.decorator");
const roles_enum_1 = require("../common/enums/roles.enum");
const role_guard_1 = require("../auth/role/role.guard");
const enums_1 = require("../common/enums");
const create_product_schema_1 = require("./schema/create-product.schema");
const product_pagination_filter_schema_1 = require("./schema/product-pagination-filter.schema");
const product_pagination_and_filter_dto_1 = require("./dto/product-pagination-and-filter.dto");
const platform_express_1 = require("@nestjs/platform-express");
const create_folder_structure_dto_1 = require("./dto/create-folder-structure.dto");
const serach_images_dto_1 = require("./dto/serach-images.dto");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async create(request, createProductsDto) {
        const jwt = request.replace('Bearer ', '');
        return await this.productsService.create(jwt, createProductsDto);
    }
    async findAll(paginationDto, request) {
        const jwt = request.replace('Bearer ', '');
        return {
            "data": await this.productsService.findAll(jwt, paginationDto)
        };
    }
    findOne(id) {
        return this.productsService.findOne(+id);
    }
    update(id, updateProductDto) {
        return this.productsService.update(+id, updateProductDto);
    }
    async uploadFiles(createFolderStructureDto, filesObject) {
        return await this.productsService.uploadFiles(createFolderStructureDto, filesObject);
    }
    async listFiles(prefixes) {
        return await this.productsService.listFiles(prefixes);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({ status: 201, description: enums_1.SuccessMessages.PRODUCT_CREATED, schema: { type: 'object', example: create_product_schema_1.CreateProductSchema }, isArray: true }),
    (0, swagger_1.ApiResponse)({ status: 400, description: enums_1.ErrorMessages.BAD_REQUEST }),
    (0, swagger_1.ApiResponse)({ status: 401, description: enums_1.ErrorMessages.NOT_VALID_TOKEN }),
    (0, swagger_1.ApiResponse)({ status: 500, description: enums_1.ErrorMessages.APPLICATION_ERROR }),
    (0, role_decorator_1.RolesDec)(roles_enum_1.Roles.STORE),
    (0, common_1.UseGuards)(role_guard_1.RoleGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Headers)('Authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: enums_1.SuccessMessages.OK_RESPONSE, schema: { type: 'object', example: product_pagination_filter_schema_1.ProductPaginationFilterSchema }, isArray: false }),
    (0, swagger_1.ApiResponse)({ status: 400, description: enums_1.ErrorMessages.BAD_REQUEST }),
    (0, swagger_1.ApiResponse)({ status: 401, description: enums_1.ErrorMessages.NOT_VALID_TOKEN }),
    (0, swagger_1.ApiResponse)({ status: 500, description: enums_1.ErrorMessages.APPLICATION_ERROR }),
    (0, role_decorator_1.RolesDec)(roles_enum_1.Roles.STORE),
    (0, common_1.UseGuards)(role_guard_1.RoleGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_pagination_and_filter_dto_1.ProductPaginationAndFilterDto, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 201, description: enums_1.SuccessMessages.FILED_CHARGED }),
    (0, swagger_1.ApiResponse)({ status: 400, description: enums_1.ErrorMessages.BAD_REQUEST }),
    (0, swagger_1.ApiResponse)({ status: 401, description: enums_1.ErrorMessages.NOT_VALID_TOKEN }),
    (0, swagger_1.ApiResponse)({ status: 500, description: enums_1.ErrorMessages.APPLICATION_ERROR }),
    (0, role_decorator_1.RolesDec)(roles_enum_1.Roles.STORE),
    (0, common_1.UseGuards)(role_guard_1.RoleGuard),
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'files', maxCount: 10 }])),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_folder_structure_dto_1.CreateFolderStructureDto, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "uploadFiles", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: enums_1.SuccessMessages.SUCCESS_RETURN }),
    (0, swagger_1.ApiResponse)({ status: 401, description: enums_1.ErrorMessages.NOT_VALID_TOKEN }),
    (0, swagger_1.ApiResponse)({ status: 500, description: enums_1.ErrorMessages.APPLICATION_ERROR }),
    (0, role_decorator_1.RolesDec)(roles_enum_1.Roles.STORE),
    (0, common_1.UseGuards)(role_guard_1.RoleGuard),
    (0, common_1.Get)('images/:category/:brand'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [serach_images_dto_1.SearchImagesDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "listFiles", null);
ProductsController = __decorate([
    (0, swagger_1.ApiTags)('Product'),
    (0, swagger_1.ApiBearerAuth)("access-token"),
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map