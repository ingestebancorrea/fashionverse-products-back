import { Size } from "src/sizes/entities/size.entity";
export declare class Inventory {
    id: number;
    available_quantity: number;
    inventorystate_id: number;
    product_id: number;
    size_id: number;
    size: Size;
}
