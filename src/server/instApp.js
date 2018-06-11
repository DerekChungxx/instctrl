
import express from 'express';
import instAPI from '../controllers/api';

const app = express();
const apiRouter = instAPI();

app.use(apiRouter);

app.listen(3000, () => {
  console.log('Example app is running on port 3000!');
});

