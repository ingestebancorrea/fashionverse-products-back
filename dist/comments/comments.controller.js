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
exports.CommentsController = void 0;
const common_1 = require("@nestjs/common");
const comments_service_1 = require("./comments.service");
const create_comment_dto_1 = require("./dto/create-comment.dto");
const update_comment_dto_1 = require("./dto/update-comment.dto");
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../common/enums");
const role_decorator_1 = require("../auth/role/role.decorator");
const roles_enum_1 = require("../common/enums/roles.enum");
const role_guard_1 = require("../auth/role/role.guard");
const create_comment_schema_1 = require("./schema/create-comment.schema");
let CommentsController = class CommentsController {
    constructor(commentsService) {
        this.commentsService = commentsService;
    }
    async create(request, createCommentDto) {
        const jwt = request.replace("Bearer ", "");
        return await this.commentsService.create(jwt, createCommentDto);
    }
    findAll() {
        return this.commentsService.findAll();
    }
    findOne(id) {
        return this.commentsService.findOne(+id);
    }
    update(id, updateCommentDto) {
        return this.commentsService.update(+id, updateCommentDto);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({ status: 201, description: enums_1.SuccessMessages.COMMENT_CREATED, schema: { type: 'object', example: create_comment_schema_1.CreateCommentSchema }, isArray: true }),
    (0, swagger_1.ApiResponse)({ status: 400, description: enums_1.ErrorMessages.BAD_REQUEST }),
    (0, swagger_1.ApiResponse)({ status: 401, description: enums_1.ErrorMessages.NOT_VALID_TOKEN }),
    (0, swagger_1.ApiResponse)({ status: 500, description: enums_1.ErrorMessages.APPLICATION_ERROR }),
    (0, role_decorator_1.RolesDec)(roles_enum_1.Roles.CLIENT),
    (0, common_1.UseGuards)(role_guard_1.RoleGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Headers)("Authorization")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_comment_dto_1.CreateCommentDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_comment_dto_1.UpdateCommentDto]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "update", null);
CommentsController = __decorate([
    (0, swagger_1.ApiTags)("Comment"),
    (0, swagger_1.ApiBearerAuth)("access-token"),
    (0, common_1.Controller)('comments'),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsController);
exports.CommentsController = CommentsController;
//# sourceMappingURL=comments.controller.js.map