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
exports.PostdetailsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const postdetail_entity_1 = require("./entities/postdetail.entity");
const enums_1 = require("../common/enums");
let PostdetailsService = class PostdetailsService {
    constructor(postDetailRepository) {
        this.postDetailRepository = postDetailRepository;
    }
    async create(createPostdetailDto) {
        try {
            const objPostDetail = this.postDetailRepository.create(createPostdetailDto);
            await this.postDetailRepository.save(objPostDetail);
            return {
                staus_code: 201,
                message: enums_1.SuccessMessages.POST_DETAIL_CREATED
            };
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException(enums_1.ErrorMessages.DEFAULT_REQUEST_EXCEPTION);
        }
    }
    async findAndCountProducts(postId) {
        return await this.postDetailRepository.count({
            where: {
                post_id: postId
            }
        });
    }
    findAll() {
        return `This action returns all postdetails`;
    }
    findOne(id) {
        return `This action returns a #${id} postdetail`;
    }
    update(id, updatePostdetailDto) {
        return `This action updates a #${id} postdetail`;
    }
};
PostdetailsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(postdetail_entity_1.Postdetail)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostdetailsService);
exports.PostdetailsService = PostdetailsService;
//# sourceMappingURL=postdetails.service.js.map