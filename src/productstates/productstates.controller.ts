import { Controller, Get, Param } from '@nestjs/common';
import { ProductstatesService } from './productstates.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Product States')
@ApiBearerAuth("access-token")
@Controller('productstates')
export class ProductstatesController {
  constructor(private readonly productstatesService: ProductstatesService) {}

  @Get()
  findAll() {
    return this.productstatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productstatesService.findOne(+id);
  }
  

}
