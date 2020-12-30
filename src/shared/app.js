import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import routes from './routes';
import './consumers';

const app = express();
app.use(logger('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(routes);

export default app;
