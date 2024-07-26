import { Repository } from 'typeorm';
import { Inventorystate } from './entities/inventorystate.entity';
export declare class InventorystatesService {
    private inventoryStateRepository;
    constructor(inventoryStateRepository: Repository<Inventorystate>);
    findAll(): Promise<Inventorystate[]>;
    findOne(id: number): Promise<Inventorystate>;
    findByAlias(alias: string): Promise<Inventorystate>;
}
