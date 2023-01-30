import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { DatabaseModule } from '../database/database.module';
import { Booking, BookingSchema } from './booking.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Booking.name, schema: BookingSchema }]),
    DatabaseModule,
  ],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
