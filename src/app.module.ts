import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from './auth/guards/auth.guard';
import { CategoriesModule } from './categories/categories.module';
import { BrandsModule } from './brands/brands.module';
import { SizesModule } from './sizes/sizes.module';
import { ProductsModule } from './products/products.module';
import { InventorystatesModule } from './inventorystates/inventorystates.module';
import { InventoriesModule } from './inventories/inventories.module';
import { PostsModule } from './posts/posts.module';
import { ProductstatesModule } from './productstates/productstates.module';
import { HttpExternalApiModule } from './common/http/http.module';
import { UserModule } from './users/users.module';
import { PosttypesModule } from './posttypes/posttypes.module';
import { PostdetailsModule } from './postdetails/postdetails.module';
import { ReviewsModule } from './reviews/reviews.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true,
      envFilePath: ['.env.development.local', '.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        // ssl: true,
        //entities: [__dirname + '\\**\\entities\\*.entity{.ts,.js}'], //[__dirname + '/**/*.entity{.ts,.js}'
        // extra: (process.env?.DB_TLS_SSL && process.env?.DB_TLS_SSL === 'true') ? { "ssl": "true" } : {},       
        synchronize: false,
        autoLoadEntities:true
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    CategoriesModule,
    BrandsModule,
    SizesModule,
    InventorystatesModule,
    InventoriesModule,
    ProductsModule,
    PostsModule,
    ProductstatesModule,
    HttpExternalApiModule,
    UserModule,
    PosttypesModule,
    PostdetailsModule,
    ReviewsModule,
    CommentsModule
  ],
  providers:[
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    JwtService
  ]
})
export class AppModule {}
