import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';
import { DatabaseController } from './database.controller';

@Module({
  controllers: [DatabaseController],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
