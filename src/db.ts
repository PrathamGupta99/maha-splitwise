import mongoose from 'mongoose';
import config from './config/config';

const mongoURL = config.mongo.url;

function connect() {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(mongoURL, config.mongo.options)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

async function close() {
  return mongoose.disconnect();
}

export default {
  connect,
  close,
};
