const express = require('express')
const app = express()
const files = require('./conexion')

app.get('/', (req, res) =>{
    res.end('el servidor se ha iniciado en la parte grafica')

})

/*iniciando configuraciones del servidor*/
app.listen(5000, function(){
    console.log('Servidor iniciado yaaaaaaaaaaaaaaaaaa')


})