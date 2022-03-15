import {
  Controller,
  Post,
  Get,
  Param,
  HttpStatus,
  HttpCode,
  Delete,
  Put,
  Logger,
  Query,
} from '@nestjs/common';
import { HistoryService } from './history.service';
import { History } from './entity/history.entity';

@Controller('history')
export class HistoryController {
  // userService: any;
  constructor(private readonly historyService: HistoryService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createHistory(
    @Query('userId') id: number,
    @Query('lang') lang: string,
    @Query('chapter') chapter: string,
    @Query('score') score: number,
 
  ): Promise<History> {
    const history = new History();
    history.userId = id; //newUser.userName;
    history.hisLanguage = lang;
    history.hisChapter = chapter; //newUser.userPassword;
    history.hisScore = score;
   
    return await this.historyService.createHistory(history);
  }

  // @Get() // GET /Users
  // async findOne(): Promise<History[]> {
  //   return await this.historyService.findAllHistory();
  // }

  @Get() // GET /Users/123 /users/id
  async findHistory(@Query('userId') id: number): Promise<History[]> {
    // Logger.warn(id)
    return await this.historyService.findHistory(id);
  }

  // @Delete(':historyId') // DELETE /Users/123
  // async deleteHistory(@Param('userId') id: number) {
  //   await this.historyService.deleteHistory(id);
  //   return { success: true };
  // }
}
