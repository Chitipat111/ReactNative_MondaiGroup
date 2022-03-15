import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { History } from './entity/history.entity';

@Injectable()
export class HistoryService {
  //static historyService: any;
  constructor(
    @InjectRepository(History)
    private readonly historyRepository: Repository<History>,
  ) {}

  async createHistory(history: History): Promise<History> {
    return await this.historyRepository.save(history);
  }

  async findHistory(id: number): Promise<History[]> {
    return await this.historyRepository.find({ userId: id });
  }

  // async findAllHistory(): Promise<History[]> {
  //   return await this.historyRepository.find();
  // }

  async deleteHistory(id: number): Promise<DeleteResult> {
    return await this.historyRepository.delete({ historyId: id });
  }
}
