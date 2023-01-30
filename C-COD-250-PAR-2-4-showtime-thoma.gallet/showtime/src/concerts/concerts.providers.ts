import { Connection } from 'mongoose';
import { ConcertsSchema } from './concerts.schema';

export const concertsProviders = [
  {
    provide: 'concerts_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('concerts', ConcertsSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
