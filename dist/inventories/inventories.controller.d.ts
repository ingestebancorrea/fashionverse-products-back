import { InventoriesService } from './inventories.service';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
export declare class InventoriesController {
    private readonly inverntoriesService;
    constructor(inverntoriesService: InventoriesService);
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateInverntoryDto: UpdateInventoryDto): string;
}
