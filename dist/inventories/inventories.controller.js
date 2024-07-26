"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoriesController = void 0;
const common_1 = require("@nestjs/common");
const inventories_service_1 = require("./inventories.service");
const update_inventory_dto_1 = require("./dto/update-inventory.dto");
const swagger_1 = require("@nestjs/swagger");
let InventoriesController = class InventoriesController {
    constructor(inverntoriesService) {
        this.inverntoriesService = inverntoriesService;
    }
    findAll() {
        return this.inverntoriesService.findAll();
    }
    findOne(id) {
        return this.inverntoriesService.findOne(+id);
    }
    update(id, updateInverntoryDto) {
        return this.inverntoriesService.update(+id, updateInverntoryDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InventoriesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InventoriesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_inventory_dto_1.UpdateInventoryDto]),
    __metadata("design:returntype", void 0)
], InventoriesController.prototype, "update", null);
InventoriesController = __decorate([
    (0, swagger_1.ApiTags)('Inventory'),
    (0, swagger_1.ApiBearerAuth)("access-token"),
    (0, common_1.Controller)('inventories'),
    __metadata("design:paramtypes", [inventories_service_1.InventoriesService])
], InventoriesController);
exports.InventoriesController = InventoriesController;
//# sourceMappingURL=inventories.controller.js.map