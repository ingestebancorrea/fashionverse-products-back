export declare const CreateProductSchema: {
    name: string;
    category_id: number;
    brand_id: number;
    price: number;
    color: string;
    inventories: {
        size_id: number;
        available_quantity: number;
    }[];
    image_url: string;
}[];
