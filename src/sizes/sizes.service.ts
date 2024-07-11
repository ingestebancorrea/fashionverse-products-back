import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Size } from './entities/size.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SizesService {

  constructor(
    @InjectRepository(Size)
    private sizeRepository: Repository<Size>,
  ){ }


  async findAll() {
    return this.sizeRepository.find();
  }

  async findOne(id: number) {
    return await this.sizeRepository.findOne(
      {
        where: { 
          id 
        },
        select: {
          id: true,
          name: true
        }
      });
  }
  
}