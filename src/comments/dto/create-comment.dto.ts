import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCommentDto {

    @ApiProperty({
        name: 'message',
        type: String,
        description: 'Bonito sueter.',
    })
    @IsString()
    @IsNotEmpty()
    message: string;

    @ApiProperty({
        name: 'post_id',
        type: Number,
        description: '1',
    })
    @IsNumber()
    @IsNotEmpty()
    post_id: number;
    
}
