import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Broker {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  brokerBusinessName: string;

  @Column()
  @Field()
  brokerBusinessEmail: string;

  @Column()
  @Field()
  registrationType: string;

  @Column()
  @Field()
  registrationTypeNumber: string;

  @Column()
  @Field()
  licenseType: string;

  @Column()
  @Field()
  licenseNumber: string;

  @Column()
  @Field()
  brokerBusinessMobile: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  brokerBusinessAddress?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  brokerBusinessCity?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  brokerBusinessPostcode?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  brokerBusinessState?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  brokerBusinessSuburb?: string;
}
