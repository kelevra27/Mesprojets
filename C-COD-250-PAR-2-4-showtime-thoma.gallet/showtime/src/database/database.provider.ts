import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://John:cena@cluster0.emof9ix.mongodb.net/timeDb?retryWrites=true&w=majority',
      ),
  },
];
