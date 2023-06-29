import { InputType, Field } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreateBrokerInput {
  @IsAlpha()
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field({ nullable: true })
  address?: string;
}
