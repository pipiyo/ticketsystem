import express from 'express';
import cors from 'cors';

import ticketRouter from './routes/ticket.route';

const app = express();

const allowedOrigins = ['http://localhost:8080'];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));

app.use(express.json());

app.use('/tickets', ticketRouter);

export default app;
