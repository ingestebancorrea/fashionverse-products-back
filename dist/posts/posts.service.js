"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const post_entity_1 = require("./entities/post.entity");
const enums_1 = require("../common/enums");
const user_service_1 = require("../users/user.service");
const posttypes_service_1 = require("../posttypes/posttypes.service");
const postdetails_service_1 = require("../postdetails/postdetails.service");
const comments_service_1 = require("../comments/comments.service");
let PostsService = class PostsService {
    constructor(postRepository, userService, postTypeService, postDetailService, commentService) {
        this.postRepository = postRepository;
        this.userService = userService;
        this.postTypeService = postTypeService;
        this.postDetailService = postDetailService;
        this.commentService = commentService;
    }
    async create(token, createPostDto) {
        try {
            const userUuid = await this.userService.extractIdUserOfToken(token);
            const objPost = this.postRepository.create(createPostDto);
            objPost.likes = 0;
            objPost.user_uuid = userUuid;
            await this.postRepository.save(objPost);
            return {
                staus_code: 201,
                message: enums_1.SuccessMessages.POST_CREATED
            };
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException(enums_1.ErrorMessages.DEFAULT_REQUEST_EXCEPTION);
        }
    }
    async findAll(token, paginationDto) {
        const { limit = 5, offset = 0, description, posttype_id } = paginationDto;
        const userUuid = await this.userService.extractIdUserOfToken(token);
        const arrayPost = [];
        const postSaved = await this.postRepository.find({
            where: {
                user_uuid: userUuid,
                description: description && (0, typeorm_2.Like)(`%${description}%`),
                posttype_id: posttype_id && posttype_id
            },
            skip: offset,
            take: limit,
            order: { id: 'DESC' }
        });
        for (const post of postSaved) {
            const postAux = {
                "id": post.id,
                "likes": post.likes,
                "type": null,
                "products": null,
                "comments": null
            };
            const objPostType = await this.postTypeService.findOne(post.posttype_id);
            postAux["type"] = objPostType ? objPostType : null;
            const products = await this.postDetailService.findAndCountProducts(post.id);
            postAux["products"] = products ? products : null;
            const comments = await this.commentService.findByPost(post.id);
            postAux["comments"] = comments ? comments : [];
            arrayPost.push(postAux);
        }
        return arrayPost;
    }
    findOne(id) {
        return `This action returns a #${id} post`;
    }
    update(id, updatePostDto) {
        return `This action updates a #${id} post`;
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UsersService,
        posttypes_service_1.PosttypesService,
        postdetails_service_1.PostdetailsService,
        comments_service_1.CommentsService])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map