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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
const size_entity_1 = require("../../sizes/entities/size.entity");
const typeorm_1 = require("typeorm");
let Inventory = class Inventory {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Inventory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int'
    }),
    __metadata("design:type", Number)
], Inventory.prototype, "available_quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int'
    }),
    __metadata("design:type", Number)
], Inventory.prototype, "inventorystate_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int'
    }),
    __metadata("design:type", Number)
], Inventory.prototype, "product_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int'
    }),
    __metadata("design:type", Number)
], Inventory.prototype, "size_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => size_entity_1.Size, size => size.inventories),
    (0, typeorm_1.JoinColumn)({ name: 'size_id' }),
    __metadata("design:type", size_entity_1.Size)
], Inventory.prototype, "size", void 0);
Inventory = __decorate([
    (0, typeorm_1.Entity)('inventories')
], Inventory);
exports.Inventory = Inventory;
//# sourceMappingURL=inventory.entity.js.map