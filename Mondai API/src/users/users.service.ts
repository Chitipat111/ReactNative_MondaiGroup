import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Users } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  async createOrUpdate(user: Users): Promise<Users> {
    try {
      return await this.userRepository.save(user);
    } catch (error) {
      if (error.code === 'SQLITE_CONSTRAINT') {
        throw new ConflictException('This user already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async findOne(id: number): Promise<Users> {
    return await this.userRepository.findOne({ userId: id });
  }

  async findUser(username: string) {
    return await this.userRepository.findOne({ where: { userName: username } });
  }

  async findAll(): Promise<Users[]> {
    return await this.userRepository.find();
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.userRepository.delete({ userId: id });
  }
}
