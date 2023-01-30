import { Document } from 'mongoose';

export interface Booking extends Document {
  readonly favorite: string;
}