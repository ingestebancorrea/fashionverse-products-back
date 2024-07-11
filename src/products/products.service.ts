import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductstatesService } from 'src/productstates/productstates.service';
import { InventoriesService } from 'src/inventories/inventories.service';
import { ErrorMessages, SuccessMessages } from 'src/common/enums';
import { UsersService } from 'src/users/user.service';
import { CategoriesService } from 'src/categories/categories.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    private readonly productStateService:ProductstatesService,
    private readonly inventoryService: InventoriesService,
    private readonly userService: UsersService,
    private readonly categoryService: CategoriesService,
    private readonly brandService: BrandsService
  ){}

  async create(token: string, createProductsDto: CreateProductDto[]) {
    try{
      for(const createProductDto of createProductsDto){
        const userUuid = await this.userService.extractIdUserOfToken(token);
        const idProductState = (await this.productStateService.findByAlias("ACT")).id;

        const objProduct = this.productRepository.create(createProductDto);
        objProduct.productstate_id = idProductState;
        objProduct.user_uuid = userUuid;
        
        const productSaved = await this.productRepository.save(objProduct);

        // Save inventory 
        for(const inventory of createProductDto.inventories){
          const objInventory = {
            "size_id": inventory.size_id,
            "available_quantity": inventory.available_quantity
          }

          await this.inventoryService.create(objInventory,productSaved.id.toString());
        }
      }

      return {
        statusCode: 201,
        message: SuccessMessages.PRODUCT_CREATED,
      };
    }catch(error){
      console.log(error);
      throw new InternalServerErrorException(ErrorMessages.DEFAULT_REQUEST_EXCEPTION);
    }
    
  }

  async count(token: string){
    const userUuid = await this.userService.extractIdUserOfToken(token);

    return await this.productRepository.count({
      where: {
        user_uuid: userUuid
      }
    });
  }

  async findAll(token: string) {
    const userUuid = await this.userService.extractIdUserOfToken(token);
    const arrayProduct =[];
    const productsSaved = await this.productRepository.find({
      where: {
        user_uuid: userUuid
      }
    });

    for(const product of productsSaved){
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

}
