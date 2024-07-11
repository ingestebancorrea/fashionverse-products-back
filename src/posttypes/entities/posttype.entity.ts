import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('posttypes')
export class Posttype {

    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column({
        type:'varchar'
    })
    name: string;

    @Column({
        type:'varchar'
    })
    alias: string;

    @Column({
        type:'varchar'
    })
    exposition: string;

    @Column({
        type:'varchar'
    })
    duration: string;

    @Column({
        type:'numeric'
    })
    price: number;


}
