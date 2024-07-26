import { BrandsService } from './brands.service';
export declare class BrandsController {
    private readonly brandsService;
    constructor(brandsService: BrandsService);
    findAll(): Promise<import("./entities/brand.entity").Brand[]>;
    findOne(id: string): Promise<string>;
}
