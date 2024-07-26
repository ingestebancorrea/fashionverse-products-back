import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { SuccessMessages } from 'src/common/enums';
import { UsersService } from '../users/user.service';
import { PosttypesService } from 'src/posttypes/posttypes.service';
import { PostdetailsService } from 'src/postdetails/postdetails.service';
import { CommentsService } from 'src/comments/comments.service';
import { PostPaginationAndFilterDto } from './dto/post-pagination-and-filter.dto';
export declare class PostsService {
    private postRepository;
    private readonly userService;
    private readonly postTypeService;
    private readonly postDetailService;
    private readonly commentService;
    constructor(postRepository: Repository<Post>, userService: UsersService, postTypeService: PosttypesService, postDetailService: PostdetailsService, commentService: CommentsService);
    create(token: string, createPostDto: CreatePostDto): Promise<{
        staus_code: number;
        message: SuccessMessages;
    }>;
    findAll(token: string, paginationDto: PostPaginationAndFilterDto): Promise<any[]>;
    findOne(id: number): string;
    update(id: number, updatePostDto: UpdatePostDto): string;
}
