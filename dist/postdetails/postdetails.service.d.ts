import { CreatePostdetailDto } from './dto/create-postdetail.dto';
import { UpdatePostdetailDto } from './dto/update-postdetail.dto';
import { Repository } from 'typeorm';
import { Postdetail } from './entities/postdetail.entity';
import { SuccessMessages } from 'src/common/enums';
export declare class PostdetailsService {
    private postDetailRepository;
    constructor(postDetailRepository: Repository<Postdetail>);
    create(createPostdetailDto: CreatePostdetailDto): Promise<{
        staus_code: number;
        message: SuccessMessages;
    }>;
    findAndCountProducts(postId: number): Promise<number>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePostdetailDto: UpdatePostdetailDto): string;
}
