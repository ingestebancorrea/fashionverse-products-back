/// <reference types="multer" />
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { SuccessMessages } from 'src/common/enums';
import { ProductPaginationAndFilterDto } from './dto/product-pagination-and-filter.dto';
import { CreateFolderStructureDto } from './dto/create-folder-structure.dto';
import { SearchImagesDto } from './dto/serach-images.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(request: any, createProductsDto: CreateProductDto[]): Promise<{
        statusCode: number;
        message: SuccessMessages;
    }>;
    findAll(paginationDto: ProductPaginationAndFilterDto, request: any): Promise<{
        data: any[];
    }>;
    findOne(id: string): string;
    update(id: string, updateProductDto: UpdateProductDto): string;
    uploadFiles(createFolderStructureDto: CreateFolderStructureDto, filesObject: {
        files: Express.Multer.File[];
    }): Promise<any>;
    listFiles(prefixes: SearchImagesDto): Promise<{
        result: any;
    }>;
}
