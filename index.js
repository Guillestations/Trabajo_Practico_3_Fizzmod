import express from 'express';
//import rutas from './router/rutas.js'
import operacion from './modulos/opc.js';
import random from './modulos/random.js';
import demo from './modulos/operacion.js';
import operation from './modulos/operacion.js';

console.log('hola desde index')
console.log(operacion(1,2,'suma'))
console.log(saludo)
const app = express();
const PORT = process.env.PORT || 3000;
//const PORT =  3000;

//Rutas
app.use(express.static('public'));
app.get('/random', (req, res) =>{
    res.send('pafina web de inicio');
});
app.get('/info', (req, res) =>{
    res.send('Desde la web de info');
});

app.get('/operaciones', (req, res) =>{
    res.send(operation(req.query));
});
app.listen(PORT, (req, res)=>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
});

app.on('error', error => console.log(`Servidor tuvo un error : ${error}`));