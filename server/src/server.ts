import 'reflect-metadata';
import './database';
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Hello from express with TS!',
  });
});

app.listen(3030, () => {
  console.log(`Server up and running on port 3030`);
});
