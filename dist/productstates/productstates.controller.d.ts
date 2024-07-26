import { ProductstatesService } from './productstates.service';
export declare class ProductstatesController {
    private readonly productstatesService;
    constructor(productstatesService: ProductstatesService);
    findAll(): string;
    findOne(id: string): string;
}
