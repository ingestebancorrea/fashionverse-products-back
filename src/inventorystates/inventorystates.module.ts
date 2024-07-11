import { Module } from '@nestjs/common';
import { InventorystatesService } from './inventorystates.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Inventorystate } from './entities/inventorystate.entity';
import { InventorystatesController } from './inventorystates.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Inventorystate]),
    AuthModule
  ],
  controllers: [InventorystatesController],
  providers: [InventorystatesService],
  exports: [InventorystatesService]
})
export class InventorystatesModule {}
