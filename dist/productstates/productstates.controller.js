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
exports.ProductstatesController = void 0;
const common_1 = require("@nestjs/common");
const productstates_service_1 = require("./productstates.service");
const swagger_1 = require("@nestjs/swagger");
let ProductstatesController = class ProductstatesController {
    constructor(productstatesService) {
        this.productstatesService = productstatesService;
    }
    findAll() {
        return this.productstatesService.findAll();
    }
    findOne(id) {
        return this.productstatesService.findOne(+id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductstatesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductstatesController.prototype, "findOne", null);
ProductstatesController = __decorate([
    (0, swagger_1.ApiTags)('Product States'),
    (0, swagger_1.ApiBearerAuth)("access-token"),
    (0, common_1.Controller)('productstates'),
    __metadata("design:paramtypes", [productstates_service_1.ProductstatesService])
], ProductstatesController);
exports.ProductstatesController = ProductstatesController;
//# sourceMappingURL=productstates.controller.js.map