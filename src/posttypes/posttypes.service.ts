import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posttype } from './entities/posttype.entity';

@Injectable()
export class PosttypesService {

  constructor(
    @InjectRepository(Posttype)
    private postTypeRepository: Repository<Posttype>,
  ){}

  async findAll() {
    return await this.postTypeRepository.find();
  }

  async findOne(id: number) {
    const postType = await this.postTypeRepository.findOne(
      {
        where: { 
          id 
        },
        select: {
          name: true
        }
      });

    return postType.name
  }

}
