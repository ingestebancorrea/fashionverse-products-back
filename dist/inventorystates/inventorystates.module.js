"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventorystatesModule = void 0;
const common_1 = require("@nestjs/common");
const inventorystates_service_1 = require("./inventorystates.service");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const inventorystate_entity_1 = require("./entities/inventorystate.entity");
const inventorystates_controller_1 = require("./inventorystates.controller");
let InventorystatesModule = class InventorystatesModule {
};
InventorystatesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([inventorystate_entity_1.Inventorystate]),
            auth_module_1.AuthModule
        ],
        controllers: [inventorystates_controller_1.InventorystatesController],
        providers: [inventorystates_service_1.InventorystatesService],
        exports: [inventorystates_service_1.InventorystatesService]
    })
], InventorystatesModule);
exports.InventorystatesModule = InventorystatesModule;
//# sourceMappingURL=inventorystates.module.js.map