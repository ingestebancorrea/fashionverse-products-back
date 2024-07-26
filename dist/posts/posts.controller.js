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
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const posts_service_1 = require("./posts.service");
const create_post_dto_1 = require("./dto/create-post.dto");
const update_post_dto_1 = require("./dto/update-post.dto");
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../common/enums");
const role_decorator_1 = require("../auth/role/role.decorator");
const roles_enum_1 = require("../common/enums/roles.enum");
const role_guard_1 = require("../auth/role/role.guard");
const create_post_schema_1 = require("./schema/create-post.schema");
const post_pagination_filter_schema_1 = require("./schema/post-pagination-filter.schema");
const post_pagination_and_filter_dto_1 = require("./dto/post-pagination-and-filter.dto");
let PostsController = class PostsController {
    constructor(postsService) {
        this.postsService = postsService;
    }
    async create(request, createPostDto) {
        const jwt = request.replace('Bearer ', '');
        return await this.postsService.create(jwt, createPostDto);
    }
    async findAll(paginationDto, request) {
        const jwt = request.replace('Bearer ', '');
        return {
            "data": await this.postsService.findAll(jwt, paginationDto)
        };
    }
    findOne(id) {
        return this.postsService.findOne(+id);
    }
    update(id, updatePostDto) {
        return this.postsService.update(+id, updatePostDto);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({ status: 201, description: enums_1.SuccessMessages.POST_CREATED, schema: { type: 'object', example: create_post_schema_1.CreatePostSchema }, isArray: true }),
    (0, swagger_1.ApiResponse)({ status: 400, description: enums_1.ErrorMessages.BAD_REQUEST }),
    (0, swagger_1.ApiResponse)({ status: 401, description: enums_1.ErrorMessages.NOT_VALID_TOKEN }),
    (0, swagger_1.ApiResponse)({ status: 500, description: enums_1.ErrorMessages.APPLICATION_ERROR }),
    (0, role_decorator_1.RolesDec)(roles_enum_1.Roles.STORE),
    (0, common_1.UseGuards)(role_guard_1.RoleGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Headers)('Authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_post_dto_1.CreatePostDto]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: enums_1.SuccessMessages.OK_RESPONSE, schema: { type: 'object', example: post_pagination_filter_schema_1.PostPaginationFilterSchema }, isArray: false }),
    (0, swagger_1.ApiResponse)({ status: 400, description: enums_1.ErrorMessages.BAD_REQUEST }),
    (0, swagger_1.ApiResponse)({ status: 401, description: enums_1.ErrorMessages.NOT_VALID_TOKEN }),
    (0, swagger_1.ApiResponse)({ status: 500, description: enums_1.ErrorMessages.APPLICATION_ERROR }),
    (0, role_decorator_1.RolesDec)(roles_enum_1.Roles.STORE),
    (0, common_1.UseGuards)(role_guard_1.RoleGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_pagination_and_filter_dto_1.PostPaginationAndFilterDto, Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_post_dto_1.UpdatePostDto]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "update", null);
PostsController = __decorate([
    (0, swagger_1.ApiTags)('Post'),
    (0, swagger_1.ApiBearerAuth)("access-token"),
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map