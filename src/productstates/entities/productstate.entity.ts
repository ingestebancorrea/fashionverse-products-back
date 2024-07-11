import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('productstates')
export class Productstate {

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
