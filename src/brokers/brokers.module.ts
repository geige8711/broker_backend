import { Module } from '@nestjs/common';
import { BrokersService } from './brokers.service';
import { BrokersResolver } from './brokers.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Broker } from './entities/broker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Broker])],
  providers: [BrokersResolver, BrokersService],
})
export class BrokersModule {}
