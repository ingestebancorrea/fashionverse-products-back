import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, IsPositive, IsString, Min } from "class-validator";

export class PostPaginationAndFilterDto {
      
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
    description?:string;

    @ApiPropertyOptional()
    @IsOptional()
    @Min(1)
    @Type(()=> Number)   
    posttype_id?:number;

}