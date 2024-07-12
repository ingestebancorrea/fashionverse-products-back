import { Controller, Get, Post, Body, Patch, Param, UseGuards, Headers, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RolesDec } from 'src/auth/role/role.decorator';
import { Roles } from 'src/common/enums/roles.enum';
import { RoleGuard } from 'src/auth/role/role.guard';
import { ErrorMessages, SuccessMessages } from 'src/common/enums';
import { CreateProductSchema } from './schema/create-product.schema';
import { ProductPaginationFilterSchema } from './schema/product-pagination-filter.schema';
import { ProductPaginationAndFilterDto } from './dto/product-pagination-and-filter.dto';

@ApiTags('Product')
@ApiBearerAuth("access-token")
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiResponse({status:201, description: SuccessMessages.PRODUCT_CREATED, schema: { type: 'object', example: CreateProductSchema }, isArray: true })
  @ApiResponse({status:400, description: ErrorMessages.BAD_REQUEST})
  @ApiResponse({status:401, description: ErrorMessages.NOT_VALID_TOKEN})
  @ApiResponse({status:500, description: ErrorMessages.APPLICATION_ERROR})
  @RolesDec(Roles.STORE)
  @UseGuards(RoleGuard)
  @Post()
  async create(@Headers('Authorization') request:any, @Body() createProductsDto: CreateProductDto[]) {
    const jwt = request.replace('Bearer ', '');
    return await this.productsService.create(jwt,createProductsDto);
  }

  @ApiResponse({status:200, description: SuccessMessages.OK_RESPONSE, schema: { type: 'object', example: ProductPaginationFilterSchema }, isArray: false })
  @ApiResponse({status:400, description: ErrorMessages.BAD_REQUEST})
  @ApiResponse({status:401, description: ErrorMessages.NOT_VALID_TOKEN})
  @ApiResponse({status:500, description: ErrorMessages.APPLICATION_ERROR})
  @RolesDec(Roles.STORE)
  @UseGuards(RoleGuard)
  @Get()
  async findAll(@Query() paginationDto:ProductPaginationAndFilterDto,@Headers('Authorization') request:any) {
    const jwt = request.replace('Bearer ', '');

    return {
      "data": await this.productsService.findAll(jwt,paginationDto)
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

}
