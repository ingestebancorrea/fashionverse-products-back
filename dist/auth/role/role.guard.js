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
exports.RoleGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const enums_1 = require("../../common/enums");
const jwt_1 = require("@nestjs/jwt");
const roles_enum_1 = require("../../common/enums/roles.enum");
const states_enum_1 = require("../../common/enums/states.enum");
let RoleGuard = class RoleGuard {
    constructor(jwtService, reflector) {
        this.jwtService = jwtService;
        this.reflector = reflector;
    }
    matchRoles(roles, userRole) {
        return roles.some((role) => role === userRole);
    }
    matchStates(activeRole) {
        const getIndex = Object.keys(roles_enum_1.Roles).filter(object => {
            return roles_enum_1.Roles[object] === activeRole;
        });
        if (states_enum_1.RolesStates[getIndex[0]] !== undefined)
            return states_enum_1.RolesStates[getIndex[0]];
        return null;
    }
    async canActivate(context) {
        const roles = this.reflector.get('roles', context.getHandler());
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        const payload = await this.jwtService.verify(token, {
            secret: process.env.JWT_SECRET
        });
        if (!this.matchRoles(roles, payload.activerole))
            throw new common_1.UnauthorizedException(enums_1.ErrorMessages.UNAUTHORIZED_EXCEPTION);
        request["searchStates"] = this.matchStates(payload.activerole);
        return true;
    }
    extractTokenFromHeader(request) {
        var _a, _b;
        const [type, token] = (_b = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')) !== null && _b !== void 0 ? _b : [];
        return type === 'Bearer' ? token : undefined;
    }
};
RoleGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        core_1.Reflector])
], RoleGuard);
exports.RoleGuard = RoleGuard;
//# sourceMappingURL=role.guard.js.map