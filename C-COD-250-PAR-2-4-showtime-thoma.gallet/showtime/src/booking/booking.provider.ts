// eslint-disable-next-line prettier/prettier
import { Connection } from 'mongoose';
// eslint-disable-next-line prettier/prettier
import { BookingSchema } from './booking.schema';
// eslint-disable-next-line prettier/prettier

// eslint-disable-next-line prettier/prettier
export const bookingProviders = [

  // eslint-disable-next-line prettier/prettier
  {

    // eslint-disable-next-line prettier/prettier
    provide: 'booking_MODEL',
    // eslint-disable-next-line prettier/prettier
    useFactory: (connection: Connection) =>
      // eslint-disable-next-line prettier/prettier
      connection.model('booking', BookingSchema),
    // eslint-disable-next-line prettier/prettier

    // eslint-disable-next-line prettier/prettier
    inject: ['DATABASE_CONNECTION'],
    // eslint-disable-next-line prettier/prettier
  },
  // eslint-disable-next-line prettier/prettier 
];
