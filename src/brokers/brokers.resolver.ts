import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BrokersService } from './brokers.service';
import { Broker } from './entities/broker.entity';
import { CreateBrokerInput } from './dto/create-broker.input';
import { UpdateBrokerInput } from './dto/update-broker.input';

@Resolver(() => Broker)
export class BrokersResolver {
  constructor(private readonly brokersService: BrokersService) {}

  @Mutation(() => Broker)
  createBroker(
    @Args('createBrokerInput') createBrokerInput: CreateBrokerInput,
  ) {
    return this.brokersService.create(createBrokerInput);
  }

  @Query(() => [Broker], { name: 'brokers' })
  findAll() {
    return this.brokersService.findAll();
  }

  @Query(() => Broker, { name: 'broker' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.brokersService.findOne(id);
  }

  @Mutation(() => Broker)
  updateBroker(
    @Args('updateBrokerInput') updateBrokerInput: UpdateBrokerInput,
  ) {
    return this.brokersService.update(updateBrokerInput.id, updateBrokerInput);
  }

  @Mutation(() => Broker)
  removeBroker(@Args('id', { type: () => Int }) id: number) {
    return this.brokersService.remove(id);
  }
}
