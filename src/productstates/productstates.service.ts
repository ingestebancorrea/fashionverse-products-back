import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Productstate } from './entities/productstate.entity';

@Injectable()
export class ProductstatesService {

  constructor(
    @InjectRepository(Productstate)
    private productStateRepository: Repository<Productstate>
  ){}

  findAll() {
    return `This action returns all productstates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productstate`;
  }

  async findByAlias(alias: string){
    return await this.productStateRepository.findOne({ where: { alias } });
  }

}
