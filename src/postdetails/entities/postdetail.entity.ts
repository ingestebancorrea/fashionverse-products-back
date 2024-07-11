import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}
