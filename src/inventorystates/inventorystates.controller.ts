import { Controller, Get, Param } from '@nestjs/common';
import { InventorystatesService } from './inventorystates.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Inventory States')
@ApiBearerAuth("access-token")
@Controller('inventorystates')
export class InventorystatesController {
  constructor(private readonly inventorystatesService: InventorystatesService) {}

  @Get()
  async findAll() {
    return await this.inventorystatesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.inventorystatesService.findOne(+id);
  }

}
