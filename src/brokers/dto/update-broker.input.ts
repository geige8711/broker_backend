import { CreateBrokerInput } from './create-broker.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBrokerInput extends PartialType(CreateBrokerInput) {
  @Field(() => Int)
  id: number;
}
