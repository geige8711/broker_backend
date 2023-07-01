import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(
    private readonly authService: AuthService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async create(createUserInput: CreateUserInput): Promise<User> {
    return await this.userRepository.save(
      new User({
        ...createUserInput,
        password: await this.authService.hashPassword(createUserInput.password),
      }),
    );
  }
  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneOrFail({ where: { id } });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} broker`;
  }

  remove(id: number) {
    return `This action removes a #${id} broker`;
  }
}
