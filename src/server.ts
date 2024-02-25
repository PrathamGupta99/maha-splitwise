import expres, { Application } from 'express';
import cookieParser from 'cookie-parser';

import bodyParser from 'body-parser';
import routes from './api/v1/routes';
import { errorHandler } from './middleware/errorHandler';

export default function server() {
  const app: Application = expres();

  /** Parse the body of the request */
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.use(cookieParser());

  app.use(errorHandler);

  /** Routes go here */
  app.use('/v1', routes);

  app.get('/', async (req, res) => {
    res.status(200).send('Server is healthy!');
  });

  return app;
}
