import { InventorystatesService } from './inventorystates.service';
export declare class InventorystatesController {
    private readonly inventorystatesService;
    constructor(inventorystatesService: InventorystatesService);
    findAll(): Promise<import("./entities/inventorystate.entity").Inventorystate[]>;
    findOne(id: string): Promise<import("./entities/inventorystate.entity").Inventorystate>;
}
