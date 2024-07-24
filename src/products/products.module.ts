import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { AuthModule } from 'src/auth/auth.module';
import { ProductstatesModule } from 'src/productstates/productstates.module';
import { InventoriesModule } from 'src/inventories/inventories.module';
import { UserModule } from 'src/users/users.module';
import { CategoriesModule } from 'src/categories/categories.module';
import { BrandsModule } from 'src/brands/brands.module';
import { StoresModule } from 'src/stores/stores.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    AuthModule,
    ProductstatesModule,
    InventoriesModule,
    UserModule,
    CategoriesModule,
    BrandsModule,
    StoresModule
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
