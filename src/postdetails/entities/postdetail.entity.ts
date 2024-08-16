import { Product } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('postdetails')
export class Postdetail {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        type:'int'
    })
    product_id: number;

    @Column({
        type:'int'
    })
    post_id: number;

    @ManyToOne(() => Product, product => product.postdetails)
    @JoinColumn({ name: 'product_id' })
    product: Product;

}
