import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, IsPositive, IsString, Min } from "class-validator";

export class ProductPaginationAndFilterDto {
      
    @ApiPropertyOptional()
    @IsOptional()
    @IsPositive() 
    @Type(()=> Number)   //enableImplicitConversions:true
    limit?:number;

    @ApiPropertyOptional()
    @IsOptional()
    @Min(0)
    @Type(()=> Number)  
    offset?:number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    name?:string;

    @ApiPropertyOptional()
    @IsOptional()
    @Min(1)
    @Type(()=> Number)   
    category_id?:number;

    @ApiPropertyOptional()
    @IsOptional()
    @Min(1)
    @Type(()=> Number)   
    brand_id?:number;

}