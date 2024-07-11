import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("reviews")
export class Review {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        type:'varchar'
    })
    comment: string;

    @Column({
        type:'int'
    })
    product_id: number;

    @Column({
        type:'uuid'
    })
    user_uuid: string;
}
