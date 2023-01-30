import { Document } from 'mongoose';

export interface Concerts extends Document {
  readonly name: string;
  readonly data: string;
  readonly price: string;
  readonly place: string;
}
