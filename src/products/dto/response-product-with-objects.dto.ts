import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsObject, IsString } from "class-validator"
import { InventoryDto } from "src/inventories/dto/inventory.dto";

interface Size {
    id: number;
    name: string;
}

interface InventoryItem {
    id: number;
    size: Size;
    available_quantity: number;
}

export class ResponseProductWithObjectsDto extends InventoryDto<InventoryItem> {

    @ApiProperty({
        example: 1,
        description: 'Question ID',
        uniqueItems: true
    })
    @IsNumber()
    id: number;

    @ApiProperty({
        example: 'Test name',
        description: 'Test name'
    })
    @IsString()
    name: string;

    @ApiProperty({
        example: 'Image url',
        description: 'Image url'
    })
    @IsString()
    image_url: string;

    @ApiProperty({
        example: {"id":1,"name":"Camiseta"},
        description: 'category object'
    })
    @IsObject()
    category: Object;

    @ApiProperty({
        example: {"id":1,"name":"Nike"},
        description: 'brand object'
    })
    @IsObject()
    brand: Object;

}