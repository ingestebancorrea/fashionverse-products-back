import { Product } from "src/products/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('brands')
export class Brand {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        type:'varchar',
        unique: true
    })
    name: string;

    @Column({
        type:'varchar',
        unique: true
    })
    alias: string;

    @OneToMany(() => Product, product => product.category)
    products: Product[];
    
}
