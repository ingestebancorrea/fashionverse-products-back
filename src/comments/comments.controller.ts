import { Controller, Get, Post, Body, Patch, Param, UseGuards, Headers } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ErrorMessages, SuccessMessages } from 'src/common/enums';
import { RolesDec } from 'src/auth/role/role.decorator';
import { Roles } from 'src/common/enums/roles.enum';
import { RoleGuard } from 'src/auth/role/role.guard';
import { CreateCommentSchema } from './schema/create-comment.schema';

@ApiTags("Comment")
@ApiBearerAuth("access-token")
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @ApiResponse({status:201, description: SuccessMessages.COMMENT_CREATED, schema: { type: 'object', example: CreateCommentSchema }, isArray: true })
  @ApiResponse({status:400, description: ErrorMessages.BAD_REQUEST})
  @ApiResponse({status:401, description: ErrorMessages.NOT_VALID_TOKEN})
  @ApiResponse({status:500, description: ErrorMessages.APPLICATION_ERROR})
  @RolesDec(Roles.CLIENT)
  @UseGuards(RoleGuard)
  @Post()
  async create(@Headers("Authorization") request:any, @Body() createCommentDto: CreateCommentDto) {
    const jwt = request.replace("Bearer ","");
    return await this.commentsService.create(jwt,createCommentDto);
  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(+id, updateCommentDto);
  }

}
