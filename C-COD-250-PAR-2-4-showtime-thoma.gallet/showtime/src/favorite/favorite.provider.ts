// eslint-disable-next-line prettier/prettier
import { Connection } from 'mongoose';
// eslint-disable-next-line prettier/prettier
import { FavoriteSchema } from './favorite.schema';

// eslint-disable-next-line prettier/prettier
export const favoriteProviders = [
  // eslint-disable-next-line prettier/prettier
  {
    // eslint-disable-next-line prettier/prettier
    provide: 'favorite_MODEL',
    // eslint-disable-next-line prettier/prettier
    useFactory: (connection: Connection) =>
      // eslint-disable-next-line prettier/prettier
      connection.model('favorite', FavoriteSchema),
    // eslint-disable-next-line prettier/prettier

    // eslint-disable-next-line prettier/prettier
    inject: ['DATABASE_CONNECTION'],
    // eslint-disable-next-line prettier/prettier
  },
  // eslint-disable-next-line prettier/prettier
];
