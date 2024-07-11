import { Controller, Get, Post, Body, Patch, Param, UseGuards, Headers } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ErrorMessages, SuccessMessages } from 'src/common/enums';
import { RolesDec } from 'src/auth/role/role.decorator';
import { Roles } from 'src/common/enums/roles.enum';
import { RoleGuard } from 'src/auth/role/role.guard';
import { CreatePostSchema } from './schema/create-post.schema';
import { PostPaginationFilterSchema } from './schema/post-pagination-filter.schema';

@ApiTags('Post')
@ApiBearerAuth("access-token")
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiResponse({status:201, description: SuccessMessages.POST_CREATED, schema: { type: 'object', example: CreatePostSchema }, isArray: true })
  @ApiResponse({status:400, description: ErrorMessages.BAD_REQUEST})
  @ApiResponse({status:401, description: ErrorMessages.NOT_VALID_TOKEN})
  @ApiResponse({status:500, description: ErrorMessages.APPLICATION_ERROR})
  @RolesDec(Roles.STORE)
  @UseGuards(RoleGuard)
  @Post()
  async create(@Headers('Authorization') request: any, @Body() createPostDto: CreatePostDto) {
    const jwt = request.replace('Bearer ', '');
    return await this.postsService.create(jwt,createPostDto);
  }

  @ApiResponse({status:200, description: SuccessMessages.OK_RESPONSE, schema: { type: 'object', example: PostPaginationFilterSchema }, isArray: false })
  @ApiResponse({status:400, description: ErrorMessages.BAD_REQUEST})
  @ApiResponse({status:401, description: ErrorMessages.NOT_VALID_TOKEN})
  @ApiResponse({status:500, description: ErrorMessages.APPLICATION_ERROR})
  @RolesDec(Roles.STORE)
  @UseGuards(RoleGuard)
  @Get()
  async findAll(@Headers('Authorization') request:any) {
    const jwt = request.replace('Bearer ', '');

    return {
      "nomberofposts": await this.postsService.count(jwt),
      "posts": await this.postsService.findAll(jwt)
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

}
