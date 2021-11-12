import express, { Application } from "express";


const app: Application = express();

app.get('/', (_, res) => {
  res.send('Hello World!')
});

app.listen(5000, () => {
  console.log(`Example app listening at http://localhost:${5000}`)
});