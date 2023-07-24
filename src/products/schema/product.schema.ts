import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({
    type: String,
    required: true,
  })
  name: string;
  @Prop({
    type: String,
    required: true,
  })
  description: string;
  @Prop({
    type: String,
    required: true,
  })
  image: string;
  @Prop({
    type: Number,
    required: true,
  })
  price: number;
  @Prop({
    type: Number,
    required: true,
  })
  quantity: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
