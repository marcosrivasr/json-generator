import express from 'express';
import {join, basename} from 'path';
import { readFile, readdir } from 'fs/promises';

import cors from 'cors';
import { allowedNodeEnvironmentFlags } from 'process';
import Generator from './generator';

const app = express();
let filenames:string[] = [];
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('./public'));
app.use(cors());
app.set('views', './src/views');
app.set('view engine', 'pug');

app.get('/', async (req, res) => {
    filenames = [];
    try{
        const files = await readdir('./src/apis', 'utf-8');
        
        files.forEach(file =>{
            filenames.push(file);
        });
        console.log(filenames);
        res.render('home', {
            files: filenames,
            res: 'yes'
        });
    }catch(error){
        console.error(error);
    }
});

app.get('/actions/add', (req, res) => {
    res.render('new');
});
app.post('/actions/create', (req, res) => {
    const {data, name} = req.body;
    console.log(req.body);
    if(data == '' || data == undefined){
        res.render('new', {
            error:'Fill the name of the dataset and the content before'
        });
        return;
    }
    const json = JSON.parse(data);
    const generator = new Generator();
    const result = generator.createJSON(json);
    res.render('new', {
        src: data,
        result: result
    });
});

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
