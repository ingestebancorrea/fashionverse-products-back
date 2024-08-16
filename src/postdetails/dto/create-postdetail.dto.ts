import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsNumber } from "class-validator";

interface Products {
    id: number;
}

export class CreatePostdetailDto {

    @ApiProperty({
        name: 'post_id',
        type: Number,
        example: '1'
    })
    @IsNumber()
    @IsNotEmpty()
    post_id: number;

    @ApiProperty({
        name: 'products',
        type: Number,
        example: '[{ "id": 1 }]'
    })
    @IsArray()
    @IsNotEmpty()
    products: Products[];

}
