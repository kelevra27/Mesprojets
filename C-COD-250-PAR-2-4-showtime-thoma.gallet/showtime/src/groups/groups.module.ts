import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { groupsProviders } from './groups.providers';
import { DatabaseModule } from '../database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Groups, GroupsSchema } from './groups.schema';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: Groups.name, schema: GroupsSchema }]),
  ],
  controllers: [GroupsController],
  providers: [GroupsService, ...groupsProviders],
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class GroupsModule {}
