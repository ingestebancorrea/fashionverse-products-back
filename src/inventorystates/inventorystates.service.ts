import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventorystate } from './entities/inventorystate.entity';

@Injectable()
export class InventorystatesService {

  constructor(
    @InjectRepository(Inventorystate)
    private inventoryStateRepository: Repository<Inventorystate>,
  ){ }

  async findAll() {
    return await this.inventoryStateRepository.find();
  }

  async findOne(id: number) {
    return await this.inventoryStateRepository.findOne({ where:  { id }})
  }

  async findByAlias(alias: string) {
    return await this.inventoryStateRepository.findOne({ where:  { alias }})
  }

}
