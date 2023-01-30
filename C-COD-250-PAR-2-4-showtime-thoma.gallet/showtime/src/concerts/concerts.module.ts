import { Module } from '@nestjs/common';
import { ConcertsService } from './concerts.service';
import { ConcertsController } from './concerts.controller';
import { concertsProviders } from './concerts.providers';
import { DatabaseModule } from '../database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Concerts, ConcertsSchema } from './concerts.schema';
import { Groups, GroupsSchema } from '../groups/groups.schema';

@Module({
  imports: [DatabaseModule,
    MongooseModule.forFeature([{ name: Concerts.name, schema: ConcertsSchema }]),
    MongooseModule.forFeature([{ name: Groups.name, schema: GroupsSchema }]),

  ],
  controllers: [ConcertsController],
  providers: [ConcertsService, ...concertsProviders],
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class ConcertsModule {}
