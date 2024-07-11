import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePostdetailDto } from './dto/create-postdetail.dto';
import { UpdatePostdetailDto } from './dto/update-postdetail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Postdetail } from './entities/postdetail.entity';
import { ErrorMessages, SuccessMessages } from 'src/common/enums';

@Injectable()
export class PostdetailsService {

  constructor(
    @InjectRepository(Postdetail)
    private postDetailRepository: Repository<Postdetail>
  ){}

  async create(createPostdetailDto: CreatePostdetailDto) {
    try {
      const objPostDetail = this.postDetailRepository.create(createPostdetailDto);
      await this.postDetailRepository.save(objPostDetail);

      return {
        staus_code: 201,
        message: SuccessMessages.POST_DETAIL_CREATED
      }
    }catch(error){
      console.log(error);
      throw new InternalServerErrorException(ErrorMessages.DEFAULT_REQUEST_EXCEPTION);
    }
  }

  async findAndCountProducts(postId: number){
    return await this.postDetailRepository.count({
      where: { 
        post_id: postId
      }
    });
  }

  findAll() {
    return `This action returns all postdetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postdetail`;
  }

  update(id: number, updatePostdetailDto: UpdatePostdetailDto) {
    return `This action updates a #${id} postdetail`;
  }

}
