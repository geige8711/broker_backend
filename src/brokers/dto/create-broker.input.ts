import { InputType, Field } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreateBrokerInput {
  @IsAlpha()
  @Field()
  brokerBusinessName: string;

  @Field()
  brokerBusinessEmail: string;

  @Field()
  registrationType: string;

  @Field()
  registrationTypeNumber: string;

  @Field()
  licenseType: string;

  @Field()
  licenseNumber: string;

  @Field()
  phone: string;

  @Field({ nullable: true })
  address?: string;
}
