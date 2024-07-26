"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PosttypesModule = void 0;
const common_1 = require("@nestjs/common");
const posttypes_service_1 = require("./posttypes.service");
const posttypes_controller_1 = require("./posttypes.controller");
const typeorm_1 = require("@nestjs/typeorm");
const posttype_entity_1 = require("./entities/posttype.entity");
const auth_module_1 = require("../auth/auth.module");
let PosttypesModule = class PosttypesModule {
};
PosttypesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([posttype_entity_1.Posttype]),
            auth_module_1.AuthModule
        ],
        controllers: [posttypes_controller_1.PosttypesController],
        providers: [posttypes_service_1.PosttypesService],
        exports: [posttypes_service_1.PosttypesService]
    })
], PosttypesModule);
exports.PosttypesModule = PosttypesModule;
//# sourceMappingURL=posttypes.module.js.map