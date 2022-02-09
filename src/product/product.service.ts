import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ProductDTO } from './product.dto';
import { Product } from './product.interface';

@Injectable()
export class ProductService {
  constructor(
    @Inject("PRODUCT_MODEL")
    private productModel: Model<Product>
  ) {}
  /*
  https://docs.mongodb.com/manual/reference/operator/query/
  $eq =
  $gt >
  $gte >=
  $in in
  $lt <
  $lte <=
  $ne !=
  $nin not in
  --------------------------
  $and object | array
  $not
  $nor
  $or
  -------------------------
   */

  //리스트 get
  // mongoose.Types.ObjectId.isValid(objectidtocheck)
  async getList(search?: object): Promise<Product[]> {
    let filter = {};
    if(search){
      let and = [];
      //필터 쿼리작업
      if(search['searchText']) {
        and.push(
          {$or: [
              {category: {$regex: search['searchText'], $options: 'i'}},
              {productName: {$regex: search['searchText'], $options: 'i'}}
          ]}
        );
      }
      if(search['searchPrice']){
        switch(search['searchPrice']){
          case "1":
            //1000원 미만
            and.push(
              {productPrice: {$lt: 1000}}
            );
            break;
          case "2":
            //1000원 이상
            and.push(
              {productPrice: {$gte: 1000}}
            );
            break;
          default:
            break;
        }
      }
      if(and.length > 0) filter['$and'] = and;

    }
    return await this.productModel.find(filter).exec();
  }

  //단일 get
  async get(id: String) {
    return await this.productModel.findById(id).exec();
  }

  //insert
  async create(productDTO: ProductDTO) {
    return await this.productModel.create(productDTO);
  }

  //update
  async update(id: String, productDTO: ProductDTO) {
    return this.productModel.updateOne({_id: id}, productDTO);
  }

  //delete
  async delete(id: String) {
    return this.productModel.deleteOne({_id: id});
  }

}
