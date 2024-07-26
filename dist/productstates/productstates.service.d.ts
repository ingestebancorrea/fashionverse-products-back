import { Repository } from 'typeorm';
import { Productstate } from './entities/productstate.entity';
export declare class ProductstatesService {
    private productStateRepository;
    constructor(productStateRepository: Repository<Productstate>);
    findAll(): string;
    findOne(id: number): string;
    findByAlias(alias: string): Promise<Productstate>;
}
