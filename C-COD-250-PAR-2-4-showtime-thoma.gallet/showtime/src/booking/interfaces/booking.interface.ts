import { Document } from 'mongoose';

export interface Booking extends Document {
  readonly reservation: string;
  // readonly email: string;
  // readonly password: string;
}