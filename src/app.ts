import 'dotenv/config';
import server from './server';
import db from './db';
import { Application } from 'express';

db.connect()
  .then(() => {
    console.log('Connected to mongoDB!');
  })
  .catch((err) => {
    console.error('Error connecting to mongoDB!', err.message, err);
  });

const app: Application = server();
const port: number = parseInt(<string>process.env.PORT, 10) || 5000;

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

export default app;
