import express from 'express';
import {join, basename} from 'path';
import { readFile, readdir, writeFile } from 'fs/promises';
import {existsSync} from 'fs';

import cors from 'cors';
import { allowedNodeEnvironmentFlags } from 'process';
import Generator from './generator';
import { fstat } from 'fs';

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
    const {data} = req.body;
    console.log(req.body);
    if(data == '' || data == undefined){
        res.render('new', {
            error:'No JSON data found'
        });
        return;
    }
    let json;
    const generator = new Generator();
    try{
        json = JSON.parse(data);
        const result = generator.createJSON(json);
        res.render('new', {
            src: data,
            result: result
        });
    }catch(error){
        res.render('new', {
            error:`There's an error on your JSON syntax`
        });
        return;
    } 
});

app.post('/actions/save', async (req, res) => {
    const {name, data, src} = req.body;

    if(!name || !data){
        res.render('new', {error: 'Fill the fields correctly'});
        return;
    }

    const filename = './src/apis/'+ name + '.json';

    if(existsSync(filename)){
        res.render('new', {result: data, src: src, name: name, error: `File ${name}.json already exists, delete it before or choose another name`});
        return;
    }
    
    try{
        const response = await writeFile(filename, data, 'utf-8');
        
    }catch(error){
        console.log(error);
        throw new Error(error);
    }
    res.redirect('/');
});

app.get('/:name', async (req, res) => {
    const filename = req.params.name;
    const api = join(__dirname, 'apis', filename + '.json');

    const json = await readFile(api, 'utf-8');
    
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

app.post('/:filename', async (req, res) => {

});

app.post('/:filename/:object/', async (req, res) => {

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
