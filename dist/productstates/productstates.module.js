"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductstatesModule = void 0;
const common_1 = require("@nestjs/common");
const productstates_service_1 = require("./productstates.service");
const productstates_controller_1 = require("./productstates.controller");
const typeorm_1 = require("@nestjs/typeorm");
const productstate_entity_1 = require("./entities/productstate.entity");
let ProductstatesModule = class ProductstatesModule {
};
ProductstatesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([productstate_entity_1.Productstate])
        ],
        controllers: [productstates_controller_1.ProductstatesController],
        providers: [productstates_service_1.ProductstatesService],
        exports: [
            productstates_service_1.ProductstatesService
        ]
    })
], ProductstatesModule);
exports.ProductstatesModule = ProductstatesModule;
//# sourceMappingURL=productstates.module.js.map