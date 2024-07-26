/// <reference types="multer" />
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductstatesService } from 'src/productstates/productstates.service';
import { InventoriesService } from 'src/inventories/inventories.service';
import { SuccessMessages } from 'src/common/enums';
import { UsersService } from 'src/users/user.service';
import { CategoriesService } from 'src/categories/categories.service';
import { BrandsService } from 'src/brands/brands.service';
import { ProductPaginationAndFilterDto } from './dto/product-pagination-and-filter.dto';
import { CreateFolderStructureDto } from './dto/create-folder-structure.dto';
import { StoresService } from 'src/stores/stores.service';
import { SearchImagesDto } from './dto/serach-images.dto';
export declare class ProductsService {
    private productRepository;
    private readonly productStateService;
    private readonly inventoryService;
    private readonly userService;
    private readonly categoryService;
    private readonly brandService;
    private readonly storesService;
    constructor(productRepository: Repository<Product>, productStateService: ProductstatesService, inventoryService: InventoriesService, userService: UsersService, categoryService: CategoriesService, brandService: BrandsService, storesService: StoresService);
    create(token: string, createProductsDto: CreateProductDto[]): Promise<{
        statusCode: number;
        message: SuccessMessages;
    }>;
    findAll(token: string, paginationDto: ProductPaginationAndFilterDto): Promise<any[]>;
    findOne(id: number): string;
    update(id: number, updateProductDto: UpdateProductDto): string;
    uploadFiles(createFolderStructureDto: CreateFolderStructureDto, filesObject: {
        files: Express.Multer.File[];
    }): Promise<{
        url: string;
        ubication: string;
    }[]>;
    listFiles(prefixes: SearchImagesDto): Promise<{
        result: any;
    }>;
}
