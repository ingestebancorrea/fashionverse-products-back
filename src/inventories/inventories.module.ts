import { Module } from '@nestjs/common';
import { InventoriesController } from './inventories.controller';
import { InventoriesService } from './inventories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';
import { InventorystatesModule } from 'src/inventorystates/inventorystates.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Inventory]),
    InventorystatesModule
  ],
  controllers: [InventoriesController],
  providers: [InventoriesService],
  exports: [InventoriesService]
})
export class InventoriesModule {}
