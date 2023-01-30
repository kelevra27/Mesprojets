import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConcertsModule } from './concerts/concerts.module';
import { DatabaseModule } from './database/database.module';
import { BookingModule } from './booking/booking.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { FavoriteModule } from './favorite/favorite.module';
import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    AuthModule,
    BookingModule,
    ConcertsModule,
    GroupsModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb+srv://John:cena@cluster0.emof9ix.mongodb.net/timeDb?retryWrites=true&w=majority',
      }),
    }),
    FavoriteModule,
    ConcertsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
