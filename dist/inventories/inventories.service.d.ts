import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Inventory } from './entities/inventory.entity';
import { Repository } from 'typeorm';
import { InventorystatesService } from 'src/inventorystates/inventorystates.service';
export declare class InventoriesService {
    private inventoryRepository;
    private readonly inventoryStateService;
    constructor(inventoryRepository: Repository<Inventory>, inventoryStateService: InventorystatesService);
    create(createInventoryDto: CreateInventoryDto, productId: string): Promise<void>;
    findByProduct(productId: number): Promise<any>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateInverntoryDto: UpdateInventoryDto): string;
}
