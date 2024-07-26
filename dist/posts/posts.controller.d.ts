import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { SuccessMessages } from 'src/common/enums';
import { PostPaginationAndFilterDto } from './dto/post-pagination-and-filter.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(request: any, createPostDto: CreatePostDto): Promise<{
        staus_code: number;
        message: SuccessMessages;
    }>;
    findAll(paginationDto: PostPaginationAndFilterDto, request: any): Promise<{
        data: any[];
    }>;
    findOne(id: string): string;
    update(id: string, updatePostDto: UpdatePostDto): string;
}
