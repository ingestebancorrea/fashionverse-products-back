import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('categories')
export class Category {

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
