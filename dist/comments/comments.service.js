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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const comment_entity_1 = require("./entities/comment.entity");
const enums_1 = require("../common/enums");
const user_service_1 = require("../users/user.service");
let CommentsService = class CommentsService {
    constructor(commentRepository, userService) {
        this.commentRepository = commentRepository;
        this.userService = userService;
    }
    async create(token, createCommentDto) {
        try {
            const userUuid = await this.userService.extractIdUserOfToken(token);
            const objComment = this.commentRepository.create(createCommentDto);
            objComment.user_uuid = userUuid;
            await this.commentRepository.save(objComment);
            return {
                staus_code: 201,
                message: enums_1.SuccessMessages.COMMENT_CREATED
            };
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException(enums_1.ErrorMessages.DEFAULT_REQUEST_EXCEPTION);
        }
    }
    findAll() {
        return `This action returns all comments`;
    }
    findOne(id) {
        return `This action returns a #${id} comment`;
    }
    async findByPost(postId) {
        return await this.commentRepository.count({
            where: {
                post_id: postId
            }
        });
    }
    update(id, updateCommentDto) {
        return `This action updates a #${id} comment`;
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comment_entity_1.Comment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UsersService])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map