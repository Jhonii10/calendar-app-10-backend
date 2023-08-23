const express = require('express');
require('dotenv').config()

console.log(process.env);

// crear servidor de express
const app = express();

// directorio publico
app.use(express.static('public'))

// lectura y parseo del body
app.use(express.json())


// rutas 
app.use('/api/auth',require('./routes/auth'))



// todo: crud: eventos 

// escuchar peticiones 
app.listen(4000,()=>{
    console.log("Servidor corriendo en el puerto: http://localhost:4000");
}
)

