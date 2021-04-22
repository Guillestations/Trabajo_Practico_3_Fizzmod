import express from 'express';
import info from './modulos/info.js';
import random from './modulos/random.js';
import operaciones from './modulos/operacion.js';

console.log('hola desde index')
// console.log(operacion(1,2,'suma'))
const app = express();
const PORT = process.env.PORT || 3000;


//Rutas
app.use(express.static('public'));
app.get('/random', (req, res) =>{
    res.send(random());
});

app.get('/info', async (req, res) =>{
    res.send(await info());
});

app.get('/operaciones', (req, res) =>{
    res.send(operaciones(req.query));
});
app.listen(PORT, (req, res)=>{
    console.log('\n********************************************');
    console.log(`     Servidor corriendo en el puerto: ${PORT}`);
    console.log('\n********************************************');
});

app.on('error', error => console.log(`Servidor tuvo un error : ${error}`));