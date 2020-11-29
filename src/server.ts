import express from 'express';
import {join, basename} from 'path';
import { readFile } from 'fs/promises';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/:name', async (req, res) => {
    const filename = req.params.name;
    const api = join(__dirname, 'apis', filename + '.json');

    const json = await readFile(api, 'utf-8');
    console.log(JSON.parse(json));
    
    res.json(JSON.parse(json));
});

app.get('/:filename/:object/:id', async (req, res) => {
    const filename:string = req.params.filename;
    const object:string = req.params.object;
    const id:string = req.params.id;
    const api = join(__dirname, 'apis', filename + '.json');
    try{
        const file = await readFile(api, 'utf-8');
        const json = JSON.parse(file);
        
        const array = <any[]>json[object];
        const resultado = array.filter(x => x.id == id);
        if(resultado.length > 0){
            res.json(resultado[0]);
        }else{
            res.status(404).json({error: 'no results from the query'});
        }
    }catch(exception){
        res.status(404).json({error: 'no results from the query'});
    }
});

app.get('/:filename/:object/', async (req, res) => {
    const filename:string = req.params.filename;
    const object:string = req.params.object;
    const api = join(__dirname, 'apis', filename + '.json');

    try{
        const file = await readFile(api, 'utf-8');
        const json = JSON.parse(file);
        
        res.status(200).json(json);
    }catch(exception){
        res.status(404).json({error: 'no results from the query'});
    }
});

app.get('/', (req, res) => {
    
    res.send('HOLA');
});

app.listen(3333, () => {
    console.log('servidor iniciado...');
});
