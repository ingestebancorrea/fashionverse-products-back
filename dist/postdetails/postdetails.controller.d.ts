import { PostdetailsService } from './postdetails.service';
import { CreatePostdetailDto } from './dto/create-postdetail.dto';
import { UpdatePostdetailDto } from './dto/update-postdetail.dto';
import { SuccessMessages } from 'src/common/enums';
export declare class PostdetailsController {
    private readonly postdetailsService;
    constructor(postdetailsService: PostdetailsService);
    create(createPostdetailDto: CreatePostdetailDto): Promise<{
        staus_code: number;
        message: SuccessMessages;
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePostdetailDto: UpdatePostdetailDto): string;
}
