import express from 'express';
import requestsRouter from './routers/request.routes.js';
import {promises as fs} from 'fs';

const { readFile, writeFile } = fs;

const app = express();
app.use(express.json());

global.fileName = 'pedidos.json';

app.use('/request', requestsRouter);

app.listen(3000, async () => {
    try {
        await readFile(global.fileName);
        console.log('api start');
    } catch (err) {
        console.log(err);
    }
});