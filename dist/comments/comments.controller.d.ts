import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { SuccessMessages } from 'src/common/enums';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(request: any, createCommentDto: CreateCommentDto): Promise<{
        staus_code: number;
        message: SuccessMessages;
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCommentDto: UpdateCommentDto): string;
}
