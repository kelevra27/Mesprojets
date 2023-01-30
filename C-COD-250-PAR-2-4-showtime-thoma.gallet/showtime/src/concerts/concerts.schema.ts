import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ConcertsDocument = Concerts & Document;
  
@Schema()
export class Concerts {
  @Prop()
  date: string;

  @Prop()
  price: string;

  @Prop()
  place: string;
}

export const ConcertsSchema = SchemaFactory.createForClass(Concerts);



