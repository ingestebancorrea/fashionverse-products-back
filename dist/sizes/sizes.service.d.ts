import { Size } from './entities/size.entity';
import { Repository } from 'typeorm';
export declare class SizesService {
    private sizeRepository;
    constructor(sizeRepository: Repository<Size>);
    findAll(): Promise<Size[]>;
    findOne(id: number): Promise<Size>;
}
