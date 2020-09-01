import 'reflect-metadata';
import 'express-async-errors';

import '@entities/typeorm';
import './injections';

import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log('🌐️ Server started on port 3000!');
});
