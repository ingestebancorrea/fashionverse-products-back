"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePosttypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_posttype_dto_1 = require("./create-posttype.dto");
class UpdatePosttypeDto extends (0, mapped_types_1.PartialType)(create_posttype_dto_1.CreatePosttypeDto) {
}
exports.UpdatePosttypeDto = UpdatePosttypeDto;
//# sourceMappingURL=update-posttype.dto.js.map