import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { ErrorMessages, SuccessMessages } from 'src/common/enums';
import { UsersService } from '../users/user.service';
import { PosttypesService } from 'src/posttypes/posttypes.service';
import { PostdetailsService } from 'src/postdetails/postdetails.service';
import { CommentsService } from 'src/comments/comments.service';
import { PostPaginationAndFilterDto } from './dto/post-pagination-and-filter.dto';

@Injectable()
export class PostsService {

  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    private readonly userService: UsersService,
    private readonly postTypeService: PosttypesService,
    private readonly postDetailService: PostdetailsService,
    private readonly commentService: CommentsService
  ){}

  async create(token: string, createPostDto: CreatePostDto) {
    try{
      const userUuid = await this.userService.extractIdUserOfToken(token);
      
      const objPost = this.postRepository.create(createPostDto);
      objPost.likes = 0;
      objPost.user_uuid = userUuid;

      await this.postRepository.save(objPost);

      return {
        staus_code: 201,
        message: SuccessMessages.POST_CREATED
      }
    }catch(error){
      console.log(error);
      throw new InternalServerErrorException(ErrorMessages.DEFAULT_REQUEST_EXCEPTION);
    }
  }

  async findAll(token: string, paginationDto:PostPaginationAndFilterDto) {
    const { limit = 5, offset = 0, description, posttype_id } = paginationDto;
    const userUuid = await this.userService.extractIdUserOfToken(token);
    const arrayPost =[];
    const postSaved = await this.postRepository.find({
      where: {
        user_uuid: userUuid,
        description: description && Like(`%${description}%`),
        posttype_id: posttype_id && posttype_id
      },
      skip: offset,
      take: limit,
      order: { id: 'DESC' }
    });

    for(const post of postSaved){
      const postAux = {
        "id": post.id,
        "likes": post.likes,
        "type": null,
        "products": null,
        "comments": null
      }

      const objPostType = await this.postTypeService.findOne(post.posttype_id);
      postAux["type"] = objPostType ? objPostType : null;
      const products = await this.postDetailService.findAndCountProducts(post.id);
      postAux["products"] = products ? products : null;
      const comments = await this.commentService.findByPost(post.id);
      postAux["comments"] = comments ? comments : [];

      arrayPost.push(postAux);
    }

    return arrayPost;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

}
