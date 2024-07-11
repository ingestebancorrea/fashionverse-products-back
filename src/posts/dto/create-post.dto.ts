import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePostDto {

    @ApiProperty({
        name: 'description',
        type: String,
        description: 'Camisetas Nike Hombres, Disponible en todas las tallas!.',
    })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({
        name: 'posttype_id',
        type: Number,
        description: '1',
    })
    @IsNumber()
    @IsNotEmpty()
    posttype_id: number;


}
