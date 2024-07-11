import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { PostdetailsService } from './postdetails.service';
import { CreatePostdetailDto } from './dto/create-postdetail.dto';
import { UpdatePostdetailDto } from './dto/update-postdetail.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ErrorMessages, SuccessMessages } from 'src/common/enums';
import { RolesDec } from 'src/auth/role/role.decorator';
import { Roles } from 'src/common/enums/roles.enum';
import { RoleGuard } from 'src/auth/role/role.guard';

@ApiTags('Post Details')
@ApiBearerAuth("access-token")
@Controller('postdetails')
export class PostdetailsController {
  constructor(private readonly postdetailsService: PostdetailsService) {}

  @ApiResponse({status:201, description: SuccessMessages.POST_DETAIL_CREATED, schema: { type: 'object', example: CreatePostdetailDto }, isArray: true })
  @ApiResponse({status:400, description: ErrorMessages.BAD_REQUEST})
  @ApiResponse({status:401, description: ErrorMessages.NOT_VALID_TOKEN})
  @ApiResponse({status:500, description: ErrorMessages.APPLICATION_ERROR})
  @RolesDec(Roles.STORE)
  @UseGuards(RoleGuard)
  @Post()
  async create(@Body() createPostdetailDto: CreatePostdetailDto) {
    return this.postdetailsService.create(createPostdetailDto);
  }

  @Get()
  findAll() {
    return this.postdetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postdetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostdetailDto: UpdatePostdetailDto) {
    return this.postdetailsService.update(+id, updatePostdetailDto);
  }
}
