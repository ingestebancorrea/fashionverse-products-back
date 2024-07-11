import { Module } from '@nestjs/common';
import { ProductstatesService } from './productstates.service';
import { ProductstatesController } from './productstates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Productstate } from './entities/productstate.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Productstate])
  ],
  controllers: [ProductstatesController],
  providers: [ProductstatesService],
  exports: [
    ProductstatesService
  ]
})
export class ProductstatesModule {}
