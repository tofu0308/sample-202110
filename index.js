import express from 'express'
import ssr from './src/ssr'

const app = express();

app.listen(3000)

app.get('/', (_, res) => {
  res.send(ssr())
});