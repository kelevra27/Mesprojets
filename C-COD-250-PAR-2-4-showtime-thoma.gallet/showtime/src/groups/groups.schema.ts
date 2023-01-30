import * as mongoose from 'mongoose';
import { Concerts } from '../concerts/concerts.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type GroupsDocument = Groups & Document;

@Schema()
export class Groups {
  @Prop()
  name: string;

  @Prop()
  admin: Boolean;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Concerts' }] })
  concerts: Concerts[];
}

export const GroupsSchema = SchemaFactory.createForClass(Groups);
