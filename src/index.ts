import express from 'express';
import dotenv from 'dotenv'
import morgan from 'morgan'
import loggerMiddleware from './middlewares/loggerMiddleware';

dotenv.config();

const PORT = process.env.DEVELOPMENT_PORT || 8170;

const app = express();

app.use(morgan('tiny'))

app.use(loggerMiddleware)

app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

