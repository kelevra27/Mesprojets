import * as mongoose from 'mongoose';
import { Booking } from '../booking/booking.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Favorite } from 'src/favorite/favorite.schema';
import { Groups } from 'src/groups/interfaces/groups.interface';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  // eslint-disable-next-line @typescript-eslint/ban-types
  admin: Boolean;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }] })
  booking: Booking[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Groups' }] })
  favorite: Groups[];
}

export const UsersSchema = SchemaFactory.createForClass(Users);
