const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/tiendaejemplo')

const objectbd = mongoose.connection

objectbd.on('connected', ()=>{console.log('Conexion establecida')})
objectbd.on('error', ()=>{console.log('Conexion fallada')})

module.exports - mongoose