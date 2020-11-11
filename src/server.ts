import express from 'express';
import {join, basename} from 'path';

import { readFile } from 'fs/promises';
const app = express();

app.get('/', async (req, res) => {
    const api = join(__dirname, 'apis', 'output.json');

    const json = await readFile(api, 'utf-8');
    console.log(JSON.parse(json));
    
    res.json(JSON.parse(json));
});

app.listen(3333, () => {
    console.log('servidor iniciado...');
});