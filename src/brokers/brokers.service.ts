import { Injectable } from '@nestjs/common';
import { CreateBrokerInput } from './dto/create-broker.input';
import { UpdateBrokerInput } from './dto/update-broker.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Broker } from './entities/broker.entity';

@Injectable()
export class BrokersService {
  constructor(
    @InjectRepository(Broker) private brokersRepository: Repository<Broker>,
  ) {}

  create(createBrokerInput: CreateBrokerInput): Promise<Broker> {
    const newBroker = this.brokersRepository.create(createBrokerInput);
    return this.brokersRepository.save(newBroker);
  }

  findAll() {
    return this.brokersRepository.find();
  }

  findOne(id: number): Promise<Broker> {
    return this.brokersRepository.findOneOrFail({ where: { id } });
  }

  update(id: number, updateBrokerInput: UpdateBrokerInput) {
    return `This action updates a #${id} broker`;
  }

  remove(id: number) {
    return `This action removes a #${id} broker`;
  }
}
