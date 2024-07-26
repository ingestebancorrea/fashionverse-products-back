import { PosttypesService } from './posttypes.service';
export declare class PosttypesController {
    private readonly posttypesService;
    constructor(posttypesService: PosttypesService);
    findAll(): Promise<import("./entities/posttype.entity").Posttype[]>;
    findOne(id: string): Promise<string>;
}
