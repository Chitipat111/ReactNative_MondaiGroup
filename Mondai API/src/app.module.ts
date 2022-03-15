import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Users } from './users/entity/users.entity';
import { History } from './history/entity/history.entity';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './app.sqlite',
      entities: [Users, History],
      synchronize: process.env.NODE_ENV != 'production',
    }),
    UsersModule,
    HistoryModule,
  ],
})
export class AppModule {}
