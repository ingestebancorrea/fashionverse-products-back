import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { SuccessMessages } from 'src/common/enums';
import { UsersService } from 'src/users/user.service';
export declare class CommentsService {
    private commentRepository;
    private readonly userService;
    constructor(commentRepository: Repository<Comment>, userService: UsersService);
    create(token: string, createCommentDto: CreateCommentDto): Promise<{
        staus_code: number;
        message: SuccessMessages;
    }>;
    findAll(): string;
    findOne(id: number): string;
    findByPost(postId: number): Promise<number>;
    update(id: number, updateCommentDto: UpdateCommentDto): string;
}
