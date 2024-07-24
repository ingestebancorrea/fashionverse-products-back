import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateFolderStructureDto {

    @ApiProperty({
        name: 'category_id',
        type: Number,
        description: '1',
    })
    @IsNumber()
    @Transform(({ value }) => {
        return Number(value);
    })
    @IsNotEmpty()
    category_id: number;

    @ApiProperty({
        name: 'brand_id',
        type: Number,
        description: '1',
    })
    @IsNumber()
    @Transform(({ value }) => {
        return Number(value);
    })
    @IsNotEmpty()
    brand_id: number;

}