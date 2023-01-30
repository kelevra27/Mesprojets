import { Connection } from 'mongoose';
import { GroupsSchema } from './groups.schema';

export const groupsProviders = [
  {
    provide: 'groups_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('groups', GroupsSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
