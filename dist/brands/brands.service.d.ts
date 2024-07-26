import { Brand } from './entities/brand.entity';
import { Repository } from 'typeorm';
export declare class BrandsService {
    private brandRepository;
    constructor(brandRepository: Repository<Brand>);
    findAll(): Promise<Brand[]>;
    findOne(id: number): Promise<string>;
}
