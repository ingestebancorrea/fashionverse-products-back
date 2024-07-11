import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateInventoryDto {

    @ApiProperty({
        name: 'size_id',
        type: Number,
        description: '1',
    })
    @IsNumber()
    @IsNotEmpty()
    size_id: number;

    @ApiProperty({
        name: 'available quantity',
        type: Number,
        description: '1',
    })
    @IsNumber()
    @IsNotEmpty()
    available_quantity: number;
    
}
