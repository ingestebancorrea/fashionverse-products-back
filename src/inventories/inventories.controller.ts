import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { InventoriesService } from './inventories.service';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Inventory')
@ApiBearerAuth("access-token")
@Controller('inventories')
export class InventoriesController {
  constructor(private readonly inverntoriesService: InventoriesService) {}

  @Get()
  findAll() {
    return this.inverntoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inverntoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInverntoryDto: UpdateInventoryDto) {
    return this.inverntoriesService.update(+id, updateInverntoryDto);
  }

}
