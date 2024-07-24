import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class SearchImagesDto {

    @ApiProperty()
    @IsString()
    category: string;

    @ApiProperty()
    @IsString()
    brand: string;

}