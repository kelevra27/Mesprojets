import { Document } from 'mongoose';

export interface Groups extends Document {
  readonly name: string;
}
