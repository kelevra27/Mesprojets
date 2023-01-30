import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProviders } from './users.providers';
import { DatabaseModule } from '../database/database.module';
import { Users, UsersSchema } from './users.schema';
import { AuthService } from '../auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
    DatabaseModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, AuthService, JwtService, ...usersProviders],
  exports: [UsersService, AuthService, JwtService],
})
export class UsersModule {}
