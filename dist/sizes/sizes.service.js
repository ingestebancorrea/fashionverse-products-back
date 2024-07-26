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
exports.SizesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const size_entity_1 = require("./entities/size.entity");
const typeorm_2 = require("typeorm");
let SizesService = class SizesService {
    constructor(sizeRepository) {
        this.sizeRepository = sizeRepository;
    }
    async findAll() {
        return this.sizeRepository.find();
    }
    async findOne(id) {
        return await this.sizeRepository.findOne({
            where: {
                id
            },
            select: {
                id: true,
                name: true
            }
        });
    }
};
SizesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(size_entity_1.Size)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SizesService);
exports.SizesService = SizesService;
//# sourceMappingURL=sizes.service.js.map