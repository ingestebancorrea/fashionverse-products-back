import { SizesService } from './sizes.service';
export declare class SizesController {
    private readonly sizesService;
    constructor(sizesService: SizesService);
    findAll(): Promise<import("./entities/size.entity").Size[]>;
    findOne(id: string): Promise<import("./entities/size.entity").Size>;
}
