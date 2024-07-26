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
exports.HttpExternalService = void 0;
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const axios_2 = require("axios");
const error_messages_enum_1 = require("../enums/error-messages.enum");
let HttpExternalService = class HttpExternalService {
    constructor(httpService, request) {
        this.httpService = httpService;
        this.request = request;
    }
    post(url, params, headers) {
        throw new Error("Method not implemented.");
    }
    getWithQuery(url, params, headers) {
        throw new Error("Method not implemented.");
    }
    patch(url, params, headers) {
        throw new Error("Method not implemented.");
    }
    put(url, params, headers) {
        throw new Error("Method not implemented.");
    }
    async getWithParams(url, params, headers = null) {
        const config = {};
        this.request.headers.authorization ? config['headers'] = { Authorization: `${this.request.headers.authorization}` } : null;
        try {
            return await axios_2.default.get(url, config)
                .then((res) => {
                return res.data;
            })
                .catch((e) => {
                console.log(e);
                return null;
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error_messages_enum_1.ErrorMessages.API_RESPONSE_EXCEPTION);
        }
    }
};
HttpExternalService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(1, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [axios_1.HttpService, Object])
], HttpExternalService);
exports.HttpExternalService = HttpExternalService;
//# sourceMappingURL=http.service.js.map