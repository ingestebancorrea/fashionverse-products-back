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
exports.InventoriesService = void 0;
const common_1 = require("@nestjs/common");
const inventory_entity_1 = require("./entities/inventory.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const inventorystates_service_1 = require("../inventorystates/inventorystates.service");
const size_entity_1 = require("../sizes/entities/size.entity");
let InventoriesService = class InventoriesService {
    constructor(inventoryRepository, inventoryStateService) {
        this.inventoryRepository = inventoryRepository;
        this.inventoryStateService = inventoryStateService;
    }
    async create(createInventoryDto, productId) {
        try {
            const idInventoryState = (await this.inventoryStateService.findByAlias("DIS")).id;
            const inventoryObject = this.inventoryRepository.create(createInventoryDto);
            inventoryObject.inventorystate_id = idInventoryState;
            inventoryObject.product_id = +productId;
            await this.inventoryRepository.save(inventoryObject);
        }
        catch (error) {
            console.log('Error:', error);
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async findByProduct(productId) {
        const sizes = await this.inventoryRepository
            .createQueryBuilder('i')
            .leftJoin(size_entity_1.Size, 's', 's.id = i.size_id')
            .select(['s.name as name'])
            .where('i.product_id = :productId', { productId })
            .execute();
        return sizes;
    }
    findAll() {
        return `This action returns all inverntories`;
    }
    findOne(id) {
        return `This action returns a #${id} inverntory`;
    }
    update(id, updateInverntoryDto) {
        return `This action updates a #${id} inverntory`;
    }
};
InventoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(inventory_entity_1.Inventory)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        inventorystates_service_1.InventorystatesService])
], InventoriesService);
exports.InventoriesService = InventoriesService;
//# sourceMappingURL=inventories.service.js.map