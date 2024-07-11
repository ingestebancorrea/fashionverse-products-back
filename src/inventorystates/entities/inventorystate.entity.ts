import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('inventorystates')
export class Inventorystate {

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

}
