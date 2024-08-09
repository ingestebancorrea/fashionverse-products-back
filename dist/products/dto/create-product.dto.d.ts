import { CreateInventoryDto } from "src/inventories/dto/create-inventory.dto";
export declare class CreateProductDto {
    name: string;
    category_id: number;
    brand_id: number;
    price: number;
    color: string;
    inventories: CreateInventoryDto[];
    image_url: string;
}
