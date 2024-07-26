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
exports.BrandsController = void 0;
const common_1 = require("@nestjs/common");
const brands_service_1 = require("./brands.service");
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../common/enums");
const role_decorator_1 = require("../auth/role/role.decorator");
const roles_enum_1 = require("../common/enums/roles.enum");
const role_guard_1 = require("../auth/role/role.guard");
let BrandsController = class BrandsController {
    constructor(brandsService) {
        this.brandsService = brandsService;
    }
    async findAll() {
        return await this.brandsService.findAll();
    }
    findOne(id) {
        return this.brandsService.findOne(+id);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: enums_1.SuccessMessages.SUCCESS_RETURN }),
    (0, swagger_1.ApiResponse)({ status: 404, description: enums_1.ErrorMessages.RESOURCE_NOT_FOUND }),
    (0, swagger_1.ApiResponse)({ status: 500, description: enums_1.ErrorMessages.APPLICATION_ERROR }),
    (0, role_decorator_1.RolesDec)(roles_enum_1.Roles.STORE),
    (0, common_1.UseGuards)(role_guard_1.RoleGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrandsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "findOne", null);
BrandsController = __decorate([
    (0, swagger_1.ApiTags)('Brand'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('brands'),
    __metadata("design:paramtypes", [brands_service_1.BrandsService])
], BrandsController);
exports.BrandsController = BrandsController;
//# sourceMappingURL=brands.controller.js.map