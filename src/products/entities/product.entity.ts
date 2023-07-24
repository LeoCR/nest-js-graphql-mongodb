import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => String, { description: 'ID of the Product' })
  _id: string;
  @Field(() => String, { description: 'Name of the Product', nullable: false })
  name: string;
  @Field(() => String, {
    description: 'Description of the Product',
    nullable: false,
  })
  description: string;
  @Field(() => String, {
    description:
      'Main image URL of the Product,size minimun 320px width and 200px height',
    nullable: false,
  })
  image: string;
  @Field(() => Int, { description: 'Quantity of the Product', nullable: false })
  quantity: number;
  @Field(() => Float, { description: 'Price of the Product', nullable: false })
  price: number;
}
