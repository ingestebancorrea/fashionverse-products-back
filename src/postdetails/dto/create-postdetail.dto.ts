import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePostdetailDto {

    @ApiProperty({
        name: 'product_id',
        type: Number,
        description: '1',
    })
    @IsNumber()
    @IsNotEmpty()
    product_id: number;

    @ApiProperty({
        name: 'post_id',
        type: Number,
        description: '1',
    })
    @IsNumber()
    @IsNotEmpty()
    post_id: number;


}
