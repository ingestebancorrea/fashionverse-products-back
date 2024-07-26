"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostdetailDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_postdetail_dto_1 = require("./create-postdetail.dto");
class UpdatePostdetailDto extends (0, mapped_types_1.PartialType)(create_postdetail_dto_1.CreatePostdetailDto) {
}
exports.UpdatePostdetailDto = UpdatePostdetailDto;
//# sourceMappingURL=update-postdetail.dto.js.map