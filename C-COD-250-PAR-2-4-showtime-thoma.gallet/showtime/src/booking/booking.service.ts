import { Model } from 'mongoose';
// import { Booking } from './interfaces/booking.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Inject } from '@nestjs/common';


import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking, BookingDocument } from './booking.schema';

@Injectable()
export class BookingService {
  constructor(
    // @Inject('booking_MODEL')
    // private bookingModel: Model<Booking>,
    @InjectModel(Booking.name) private bookingModel: Model<BookingDocument>
  ) {}
  create(createBookingDto: CreateBookingDto): Promise<Booking> {
    return new this.bookingModel(createBookingDto).save();
  }

  findAll() {
    return `This action returns all booking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
