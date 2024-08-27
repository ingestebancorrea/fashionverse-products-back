import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Inventory } from './entities/inventory.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InventorystatesService } from 'src/inventorystates/inventorystates.service';
import { Size } from 'src/sizes/entities/size.entity';

@Injectable()
export class InventoriesService {

  constructor(
    @InjectRepository(Inventory)
    private inventoryRepository: Repository<Inventory>,
    private readonly inventoryStateService:InventorystatesService
  ){}

  async create(createInventoryDto: CreateInventoryDto, productId: string) {
    try {
      const inventoryState = await this.inventoryStateService.findByAlias("DIS");
      if (!inventoryState) {
        throw new Error('Inventory state not found for alias DIS');
      }
      
      const idInventoryState = inventoryState.id;
  
      const inventoryObject = this.inventoryRepository.create(createInventoryDto);
      inventoryObject.inventorystate_id = idInventoryState;
      inventoryObject.product_id = +productId;
      
      await this.inventoryRepository.save(inventoryObject);
    } catch (error) {
      console.log('Error:', error);
      throw new InternalServerErrorException(error);
    }
  }
  
  async findByProduct(productId: number){
    const sizes = await this.inventoryRepository
      .createQueryBuilder('i')
      .leftJoin(Size, 's', 's.id = i.size_id')
      .select(['s.name as name'])
      .where('i.product_id = :productId', { productId })
      .execute();

    return sizes;
  }

  findAll() {
    return `This action returns all inverntories`;
  }

  async findOne(productId: number) {
    const arrayInventory = [];
    const inventories = await this.inventoryRepository.find({
      relations: {
        size: true
      },
      where: {
        product_id: productId
      }
    });

    for ( const inventory of inventories ) {
      const inventoriesAux = {
        id: inventory.id,
        size: {
          id: inventory.size.id,
          name: inventory.size.name,
        },
        available_quantity: inventory.available_quantity
      }

      arrayInventory.push(inventoriesAux);
    }

    return arrayInventory;
  }

  update(id: number, updateInverntoryDto: UpdateInventoryDto) {
    return `This action updates a #${id} inverntory`;
  }

}
