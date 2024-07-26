"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductstateDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_productstate_dto_1 = require("./create-productstate.dto");
class UpdateProductstateDto extends (0, mapped_types_1.PartialType)(create_productstate_dto_1.CreateProductstateDto) {
}
exports.UpdateProductstateDto = UpdateProductstateDto;
//# sourceMappingURL=update-productstate.dto.js.map