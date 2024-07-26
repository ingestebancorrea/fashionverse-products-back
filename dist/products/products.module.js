"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const products_controller_1 = require("./products.controller");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("./entities/product.entity");
const auth_module_1 = require("../auth/auth.module");
const productstates_module_1 = require("../productstates/productstates.module");
const inventories_module_1 = require("../inventories/inventories.module");
const users_module_1 = require("../users/users.module");
const categories_module_1 = require("../categories/categories.module");
const brands_module_1 = require("../brands/brands.module");
const stores_module_1 = require("../stores/stores.module");
let ProductsModule = class ProductsModule {
};
ProductsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([product_entity_1.Product]),
            auth_module_1.AuthModule,
            productstates_module_1.ProductstatesModule,
            inventories_module_1.InventoriesModule,
            users_module_1.UserModule,
            categories_module_1.CategoriesModule,
            brands_module_1.BrandsModule,
            stores_module_1.StoresModule
        ],
        controllers: [products_controller_1.ProductsController],
        providers: [products_service_1.ProductsService]
    })
], ProductsModule);
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=products.module.js.map