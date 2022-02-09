import * as mongoose from 'mongoose';
import { constants } from '../../config/constants';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(constants.database),
  },
];
