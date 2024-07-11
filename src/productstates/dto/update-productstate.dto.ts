import { PartialType } from '@nestjs/mapped-types';
import { CreateProductstateDto } from './create-productstate.dto';

export class UpdateProductstateDto extends PartialType(CreateProductstateDto) {}
