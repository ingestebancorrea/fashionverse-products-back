import { Brand } from "src/brands/entities/brand.entity";
import { Category } from "src/categories/entities/category.entity";
import { Inventory } from "src/inventories/entities/inventory.entity";
import { Postdetail } from "src/postdetails/entities/postdetail.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => Postdetail, postdetail => postdetail.product)
    postdetails: Postdetail[];

    @ManyToOne(() => Category, category => category.products)
    @JoinColumn({ name: 'category_id' })
    category: Category;

    @ManyToOne(() => Brand, brand => brand.products)
    @JoinColumn({ name: 'category_id' })
    brand: Brand;

    @OneToMany(() => Inventory, inventory => inventory.product)
    inventories: Inventory[];

}
