"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoresModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("@nestjs/axios");
const http_service_1 = require("../common/http/http.service");
const stores_service_1 = require("./stores.service");
let StoresModule = class StoresModule {
};
StoresModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        providers: [stores_service_1.StoresService, http_service_1.HttpExternalService, config_1.ConfigService],
        exports: [stores_service_1.StoresService]
    })
], StoresModule);
exports.StoresModule = StoresModule;
//# sourceMappingURL=stores.module.js.map