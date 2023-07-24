import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './schema/product.schema';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Products') private productModel: Model<Product>) {}

  async create(createProductInput: CreateProductInput) {
    try {
      const product = await this.productModel.create(createProductInput);
      if (!product) {
        throw new NotFoundException('We can not create your Product');
      }
      return product;
    } catch (error) {
      return {
        error,
      };
    }
  }

  async findAll() {
    const products = await this.productModel.find();
    return products;
  }

  async findOne(id: string) {
    const product = await this.productModel.findById(id);
    if (!product) {
      throw new NotFoundException('Product not found.');
    }
    return product;
  }

  async update(id: string, updateProductInput: UpdateProductInput) {
    const productUpdated = await this.productModel.updateOne(
      { _id: id },
      {
        $set: {
          ...updateProductInput,
        },
      },
    );
    if (!productUpdated) {
      throw new NotFoundException('Product not found!');
    }
    const product = await this.productModel.findById(id);
    return product;
  }

  async remove(id: string) {
    try {
      const product = await this.productModel.findOne({
        _id: id,
      });
      if (product) {
        const productDeleted = await this.productModel.deleteOne({
          _id: id,
        });
        if (productDeleted.deletedCount <= 1) {
          return product;
        }
      } else {
        throw new NotFoundException('Product not found!');
      }
    } catch (error) {
      return {
        error,
      };
    }
  }
}
