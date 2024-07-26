export declare const ProductPaginationFilterSchema: {
    numberofproducts: number;
    products: {
        id: number;
        name: string;
        category: string;
        price: number;
        brand: string;
        sizes: {
            name: string;
        }[];
        color: string;
    }[];
};
