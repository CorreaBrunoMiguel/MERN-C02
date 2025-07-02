import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Application } from 'express';

import { users } from './users/user';

const app: Application = express();

app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
