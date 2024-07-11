import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ErrorMessages, SuccessMessages } from 'src/common/enums';
import { RolesDec } from 'src/auth/role/role.decorator';
import { Roles } from 'src/common/enums/roles.enum';
import { RoleGuard } from 'src/auth/role/role.guard';

@ApiTags('Brand')
@ApiBearerAuth('access-token')
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @ApiResponse({status:200, description: SuccessMessages.SUCCESS_RETURN})
  @ApiResponse({status:404, description: ErrorMessages.RESOURCE_NOT_FOUND})
  @ApiResponse({status:500, description: ErrorMessages.APPLICATION_ERROR})
  @RolesDec(Roles.STORE)
  @UseGuards(RoleGuard)
  @Get()
  async findAll() {
    return await this.brandsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandsService.findOne(+id);
  }

}
