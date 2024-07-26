"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
const auth_guard_1 = require("./auth/guards/auth.guard");
const categories_module_1 = require("./categories/categories.module");
const brands_module_1 = require("./brands/brands.module");
const sizes_module_1 = require("./sizes/sizes.module");
const products_module_1 = require("./products/products.module");
const inventorystates_module_1 = require("./inventorystates/inventorystates.module");
const inventories_module_1 = require("./inventories/inventories.module");
const posts_module_1 = require("./posts/posts.module");
const productstates_module_1 = require("./productstates/productstates.module");
const http_module_1 = require("./common/http/http.module");
const users_module_1 = require("./users/users.module");
const posttypes_module_1 = require("./posttypes/posttypes.module");
const postdetails_module_1 = require("./postdetails/postdetails.module");
const reviews_module_1 = require("./reviews/reviews.module");
const comments_module_1 = require("./comments/comments.module");
const stores_module_1 = require("./stores/stores.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ['.env.development.local', '.env'],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('DB_HOST'),
                    port: configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_NAME'),
                    synchronize: false,
                    autoLoadEntities: true
                }),
                inject: [config_1.ConfigService],
            }),
            auth_module_1.AuthModule,
            categories_module_1.CategoriesModule,
            brands_module_1.BrandsModule,
            sizes_module_1.SizesModule,
            inventorystates_module_1.InventorystatesModule,
            inventories_module_1.InventoriesModule,
            products_module_1.ProductsModule,
            posts_module_1.PostsModule,
            productstates_module_1.ProductstatesModule,
            http_module_1.HttpExternalApiModule,
            users_module_1.UserModule,
            posttypes_module_1.PosttypesModule,
            postdetails_module_1.PostdetailsModule,
            reviews_module_1.ReviewsModule,
            comments_module_1.CommentsModule,
            stores_module_1.StoresModule
        ],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: auth_guard_1.AuthGuard,
            },
            jwt_1.JwtService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map