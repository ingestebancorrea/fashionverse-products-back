import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        type:'varchar',
        unique: true
    })
    name: string;

    @Column({
        type:'int'
    })
    category_id: number;

    @Column({
        type:'numeric'
    })
    price: number;

    @Column({
        type:'int'
    })
    productstate_id: number;

    @Column({
        type:'int'
    })
    brand_id: number;

    @Column({
        type:'varchar'
    })
    image_url: string;

    @Column({
        type:'varchar'
    })
    color: string;

    @Column({
        type:'uuid'
    })
    user_uuid: string;

}
