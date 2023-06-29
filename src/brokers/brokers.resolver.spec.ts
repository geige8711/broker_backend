import { Test, TestingModule } from '@nestjs/testing';
import { BrokersResolver } from './brokers.resolver';
import { BrokersService } from './brokers.service';

describe('BrokersResolver', () => {
  let resolver: BrokersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrokersResolver, BrokersService],
    }).compile();

    resolver = module.get<BrokersResolver>(BrokersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
