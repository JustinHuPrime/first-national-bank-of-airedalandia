// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Account } = initSchema(schema);

export {
  User,
  Account
};