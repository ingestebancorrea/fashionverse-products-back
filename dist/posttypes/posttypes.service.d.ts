import { Repository } from 'typeorm';
import { Posttype } from './entities/posttype.entity';
export declare class PosttypesService {
    private postTypeRepository;
    constructor(postTypeRepository: Repository<Posttype>);
    findAll(): Promise<Posttype[]>;
    findOne(id: number): Promise<string>;
}
