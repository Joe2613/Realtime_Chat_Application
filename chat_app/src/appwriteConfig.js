import { Client , Databases,  Account} from 'appwrite';

export const PROJECT_ID = '6631ccf3001cac7f90f1'
export const DATABASES_ID = '6631ce560037a54691f5'
export const COLLECTION_ID_MESSAGES = '6631ce67002cfb2a0455'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6631ccf3001cac7f90f1');

    export const databases = new Databases(client);
    export const account =new Account(client);
    export default client;