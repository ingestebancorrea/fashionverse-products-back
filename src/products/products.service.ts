import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductstatesService } from 'src/productstates/productstates.service';
import { InventoriesService } from 'src/inventories/inventories.service';
import { ErrorMessages, SuccessMessages } from 'src/common/enums';
import { UsersService } from 'src/users/user.service';
import { CategoriesService } from 'src/categories/categories.service';
import { BrandsService } from 'src/brands/brands.service';
import { ProductPaginationAndFilterDto } from './dto/product-pagination-and-filter.dto';
import { S3 } from 'aws-sdk';
import { CreateFolderStructureDto } from './dto/create-folder-structure.dto';
import { StoresService } from 'src/stores/stores.service';
import { SearchImagesDto } from './dto/serach-images.dto';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    private readonly productStateService: ProductstatesService,
    private readonly inventoryService: InventoriesService,
    private readonly userService: UsersService,
    private readonly categoryService: CategoriesService,
    private readonly brandService: BrandsService,
    private readonly storesService:StoresService
  ) { }

  async create(token: string, createProductsDto: CreateProductDto[]) {
    try {
      for (const createProductDto of createProductsDto) {
        const userUuid = await this.userService.extractIdUserOfToken(token);
        const idProductState = (await this.productStateService.findByAlias("ACT")).id;

        const objProduct = this.productRepository.create(createProductDto);
        objProduct.productstate_id = idProductState;
        objProduct.user_uuid = userUuid;

        const productSaved = await this.productRepository.save(objProduct);

        // Save inventory 
        for (const inventory of createProductDto.inventories) {
          const objInventory = {
            "size_id": inventory.size_id,
            "available_quantity": inventory.available_quantity
          }

          await this.inventoryService.create(objInventory, productSaved.id.toString());
        }
      }

      return {
        statusCode: 201,
        message: SuccessMessages.PRODUCT_CREATED,
      };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(ErrorMessages.DEFAULT_REQUEST_EXCEPTION);
    }

  }

  async findAll(token: string, paginationDto: ProductPaginationAndFilterDto) {
    const { limit = 5, offset = 0, name, category_id, brand_id } = paginationDto;
    const userUuid = await this.userService.extractIdUserOfToken(token);
    const arrayProduct = [];
    const productsSaved = await this.productRepository.find({
      where: {
        user_uuid: userUuid,
        name: name && Like(`%${name}%`),
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
      }

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

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async uploadFiles(createFolderStructureDto: CreateFolderStructureDto, filesObject: { files: Express.Multer.File[] }) {
    try {
      const files = filesObject.files;

      if (!files || files.length === 0) {
        throw new BadRequestException('No files uploaded');
      }

      const s3 = new S3({
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
  
      const uploadResults = await Promise.all(
        files.map(async (file) => {
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
          } catch (e) {
            throw new InternalServerErrorException(e);
          }
        })
      );
  
      return uploadResults;
    } catch (e) {
      console.log("Error:", e);
      throw new InternalServerErrorException(ErrorMessages.DEFAULT_REQUEST_EXCEPTION);
    }
  }

  async listFiles(prefixes:SearchImagesDto) {
    const response = {
      result: null
    }

    const baseUrl = process.env.AWS_OBJECT_URL;
    const gallery = [];
    const s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY
    });
    const store = await this.storesService.findStoreByUuid();
    const storeNameReplaced = store.name.replace(" ", "_");
    
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Prefix: `${storeNameReplaced}/${prefixes.category}/${prefixes.brand}/`
    }

    await s3.listObjectsV2(params)
      .promise()
      .then(data => {
        data.Contents.map(image => {
          const nameSplit = image.Key.split("/");
          let tag = ""
          if (nameSplit.length > 1) {
            tag = nameSplit[0]
          }
          if (image.Size !== 0) {
            const imageInfo = {
              src: baseUrl + image.Key,
              name: image.Key,
              alt: image.Key,
              tag: tag
            }
            gallery.push(imageInfo)
          }
        });
      })
      .catch((err) => {
        throw err;
      });

    if(gallery.length === 0)
      throw new NotFoundException(ErrorMessages.RESOURCE_NOT_FOUND);

    response.result = gallery;
    return response
  }

}
