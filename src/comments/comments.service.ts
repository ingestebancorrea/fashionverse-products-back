import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { ErrorMessages, SuccessMessages } from 'src/common/enums';
import { UsersService } from 'src/users/user.service';

@Injectable()
export class CommentsService {

  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    private readonly userService: UsersService,
  ){}

  async create(token: string, createCommentDto: CreateCommentDto) {
    try{
      const userUuid = await this.userService.extractIdUserOfToken(token);

      const objComment = this.commentRepository.create(createCommentDto);
      objComment.user_uuid = userUuid;

      await this.commentRepository.save(objComment);

      return {
        staus_code: 201,
        message: SuccessMessages.COMMENT_CREATED
      }
    }catch(error){
      console.log(error);
      throw new InternalServerErrorException(ErrorMessages.DEFAULT_REQUEST_EXCEPTION);
    }
  }

  findAll() {
    return `This action returns all comments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  async findByPost(postId: number){
    return await this.commentRepository.count({
      where: {
        post_id: postId
      }
    });
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }
}
