"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesDec = void 0;
const common_1 = require("@nestjs/common");
const RolesDec = (...args) => (0, common_1.SetMetadata)('roles', args);
exports.RolesDec = RolesDec;
//# sourceMappingURL=role.decorator.js.map