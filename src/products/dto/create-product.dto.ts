import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CreateInventoryDto } from "src/inventories/dto/create-inventory.dto";

export class CreateProductDto {

    @ApiProperty({
        name: 'category_id',
        type: Number,
        description: '1',
    })
    @IsNumber()
    @IsNotEmpty()
    category_id: number;

    @ApiProperty({
        name: 'brand_id',
        type: Number,
        description: '1',
    })
    @IsNumber()
    @IsNotEmpty()
    brand_id: number;

    @ApiProperty({
        name: 'price',
        type: Number,
        description: '17000',
    })
    @IsNumber()
    @IsNotEmpty()
    price: number;

    @ApiProperty({
        name: 'color',
        type: String,
        description: '#FFFFFF',
    })
    @IsString()
    @IsNotEmpty()
    color: string;

    @ApiProperty({
        name: 'inventory',
        type: Array,
        description: `{
        "size_id": 1,
        "available_quantity": 1
      }`,
    })
    @IsArray()
    @IsNotEmpty()
    inventories: CreateInventoryDto[];

}
