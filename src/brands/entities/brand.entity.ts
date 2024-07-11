import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    
}
