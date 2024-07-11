import { Inventory } from "src/inventories/entities/inventory.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('sizes')
export class Size {

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

    @OneToMany(() => Inventory, inventory => inventory.size)
    inventories: Inventory[];
    
}
