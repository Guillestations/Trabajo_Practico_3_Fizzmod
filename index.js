import express from 'express';
//import rutas from './router/rutas.js'
import operacion from './mod/opc.js';
import saludo from './mod/saludo.js';
import demo from './mod/demo.js';

console.log('hola desde index')
console.log(operacion(1,2,'suma'))
console.log(saludo)
const app = express();
const PORT = process.env.PORT || 3000;
//const PORT =  3000;

//Rutas
app.get('/', (req, res) =>{
    res.send('pafina web de inicio')
})
app.get('/info', (req, res) =>{
    res.send('Desde la web de info')
})

app.get('/operaciones', (req, res) =>{
    res.send('desde Operacioines')
})
app.listen(PORT, (req, res)=>{
    console.log("Servidor corrinedo en el puerto", PORT)
})
