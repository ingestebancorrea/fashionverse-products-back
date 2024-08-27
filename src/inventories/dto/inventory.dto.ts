import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional } from 'class-validator';

export class InventoryDto<T> {
    @ApiProperty({
        example: [{ id: 1, size: { id: 1, name: 'S' }, available_quantity: 1 }],
        description: 'Array of inventory items'
    })
    @IsOptional()
    @IsArray()
    inventories: Array<T>;
}
