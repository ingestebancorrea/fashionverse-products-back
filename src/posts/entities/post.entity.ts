import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
export class Post {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        type:'varchar'
    })
    description: string;

    @Column({
        type:'int'
    })
    posttype_id: number;

    @Column({
        type:'int'
    })
    likes: number;

    @Column({
        type:'uuid'
    })
    user_uuid: string;

}
