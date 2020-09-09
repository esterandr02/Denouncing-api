import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';

import { config } from 'dotenv';

import '@entities/typeorm';
import './injections';

import routes from './routes';

config({
    path: process.env.NODE_ENV === 'development' ? '.env' : '.env.example',
});

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log('🌐️ Server started on port 3000!');
});
