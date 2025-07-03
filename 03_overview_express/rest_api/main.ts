import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Application, Request, Response, NextFunction } from 'express';

import { users } from './users/user';

const app: Application = express();

app.use(bodyParser.json());

// Validation Middleware
const validate = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).send('Name is required');
  }
  next();
};

// Async Error Handler
async function asyncFunction(): Promise<void> {
  throw new Error('Async error');
}

app.get(
  '/async-error',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await asyncFunction();
      res.send('Success');
    } catch (error) {
      next(error);
    }
  }
);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  res.status(500).send('Something broke!');
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/users', validate, (req, res) => {
  const { name } = req.body;
  res.send(`Hello, ${name}!`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
