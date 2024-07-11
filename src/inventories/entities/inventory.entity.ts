import { Size } from "src/sizes/entities/size.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('inventories')
export class Inventory {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        type:'int'
    })
    available_quantity: number;

    @Column({
        type:'int'
    })
    inventorystate_id: number;

    @Column({
        type:'int'
    })
    product_id: number;

    @Column({
        type:'int'
    })
    size_id: number;

    @ManyToOne(() => Size, size => size.inventories)
    @JoinColumn({ name: 'size_id' })
    size: Size;
    
}
