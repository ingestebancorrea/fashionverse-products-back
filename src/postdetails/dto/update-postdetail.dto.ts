import { PartialType } from '@nestjs/mapped-types';
import { CreatePostdetailDto } from './create-postdetail.dto';

export class UpdatePostdetailDto extends PartialType(CreatePostdetailDto) {}
