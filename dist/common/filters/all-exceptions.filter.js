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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const error_messages_enum_1 = require("../enums/error-messages.enum");
const jwt = require("jsonwebtoken");
let AllExceptionsFilter = class AllExceptionsFilter {
    constructor(httpAdapterHost) {
        this.httpAdapterHost = httpAdapterHost;
    }
    async catch(exception, host) {
        const { httpAdapter } = this.httpAdapterHost;
        const ctx = host.switchToHttp();
        const httpStatus = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : exception instanceof jwt.TokenExpiredError || exception instanceof jwt.JsonWebTokenError ? 401 : 500;
        let requestException = {};
        let httpMessage = error_messages_enum_1.ErrorMessages.INTERNAL_SERVER_ERROR;
        if (exception instanceof common_1.HttpException) {
            const reqException = exception.getResponse();
            requestException = reqException["message"];
            httpMessage = reqException["error"];
        }
        else if (exception instanceof jwt.TokenExpiredError || exception instanceof jwt.JsonWebTokenError) {
            requestException = exception.message;
            httpMessage = error_messages_enum_1.ErrorMessages.UNAUTHORIZED_EXCEPTION;
        }
        else {
            requestException = error_messages_enum_1.ErrorMessages.DEFAULT_REQUEST_EXCEPTION;
        }
        const responseBody = {
            statusCode: httpStatus,
            message: requestException,
            error: httpMessage
        };
        httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
    }
};
AllExceptionsFilter = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [core_1.HttpAdapterHost])
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;
//# sourceMappingURL=all-exceptions.filter.js.map