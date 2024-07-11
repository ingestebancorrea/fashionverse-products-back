import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { PosttypesService } from './posttypes.service';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RolesDec } from 'src/auth/role/role.decorator';
import { ErrorMessages, SuccessMessages } from 'src/common/enums';
import { Roles } from 'src/common/enums/roles.enum';
import { RoleGuard } from 'src/auth/role/role.guard';

@ApiTags('Post Types')
@ApiBearerAuth("access-token")
@Controller('posttypes')
export class PosttypesController {
  constructor(private readonly posttypesService: PosttypesService) {}

  @ApiResponse({status:200, description: SuccessMessages.SUCCESS_RETURN})
  @ApiResponse({status:404, description: ErrorMessages.RESOURCE_NOT_FOUND})
  @ApiResponse({status:500, description: ErrorMessages.APPLICATION_ERROR})
  @RolesDec(Roles.STORE)
  @UseGuards(RoleGuard)
  @Get()
  async findAll() {
    return await this.posttypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.posttypesService.findOne(+id);
  }

}
