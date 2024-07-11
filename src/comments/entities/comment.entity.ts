import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("comments")
export class Comment {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        type:'varchar'
    })
    message: string;

    @Column({
        type:'uuid'
    })
    user_uuid: string;

    @Column({
        type:'int'
    })
    post_id: number;
    
}
