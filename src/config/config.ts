import dotenv from 'dotenv';

dotenv.config();

interface IMongoOptions {
  useUnifiedTopology: boolean;
  useNewUrlParser: boolean;
  socketTimeoutMS: number;
  keepAlive: boolean;
  autoIndex: boolean;
  retryWrites: boolean;
}

const MONGO_OPTIONS: IMongoOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  socketTimeoutMS: 30000,
  keepAlive: true,
  autoIndex: false,
  retryWrites: false,
};

const MONGO_USERNAME = process.env.DB_USER || 'admin';
const MONGO_PASSWORD = process.env.DB_PASSWORD || 'admin';
const MONGO_HOST = process.env.DB_HOST || `maha-splitwise.srmxmpo.mongodb.net`;
const MONGO_PORT = process.env.DB_DOCKER_PORT || 27017;
const MONGO_DB_NAME = process.env.DB_NAME || `maha-splitwise`;

let MONGO: {
  host: string;
  password: string;
  username: string;
  options: IMongoOptions;
  url: string;
};
MONGO = {
  host: MONGO_HOST,
  password: MONGO_PASSWORD,
  username: MONGO_USERNAME,
  options: MONGO_OPTIONS,
  url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB_NAME}?retryWrites=true&w=majority&appName=${MONGO_HOST}`,
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1337;

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

const config = {
  mongo: MONGO,
  server: SERVER,
};

export default config;
