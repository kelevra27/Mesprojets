import { Connection } from 'mongoose';
import { UsersSchema } from './users.schema';

export const usersProviders = [
  {
    provide: 'users_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('users', UsersSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
