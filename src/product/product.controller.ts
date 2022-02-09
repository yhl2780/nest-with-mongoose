import { Body, Controller, Delete, Get, Param, Post, Put, Query, Redirect, Render, Request } from "@nestjs/common";
import { ProductService } from './product.service';
import { ProductDTO } from './product.dto';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  /**
   * 구조화 비구조화 참고
   * https://yuddomack.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AC%B8%EB%B2%95-%EB%B9%84%EA%B5%AC%EC%A1%B0%ED%99%94-%ED%95%A0%EB%8B%B9
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
   */

  /**
   * getList
   */
  @Get('/')
  @Render('product/product_list')
  async getList(@Query() search: {searchText: String}) {
    return { list: await this.productService.getList(search), search: search };
  }

  /**
   * get one
   */
  @Get('get')
  async get(@Query('id') id: string) {
    return await this.productService.get(id);
  }

  /**
   * post
   */
  @Post('create')
  async create(@Body() dto: ProductDTO) {
    await this.productService.create(dto);
  }

  /**
   * update
   */
  @Put('update')
  async update(@Body() params: {id: string, category: string, productName: string, productPrice: number|string }) {
    const dto: ProductDTO = <ProductDTO> params;
    await this.productService.update(params.id, dto);
  }

  /**
   * delete
   */
  @Delete('delete')
  async delete(@Query('id') id: string) {
    await this.productService.delete(id);
  }
}
