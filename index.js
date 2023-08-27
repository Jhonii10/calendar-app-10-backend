const express = require('express');
const { dbConection } = require('./database/config');
require('dotenv').config()
var cors = require('cors')



// crear servidor de express
const app = express();

// base de datos 
dbConection()

// cors
app.use(cors())


// directorio publico
app.use(express.static('public'))

// lectura y parseo del body
app.use(express.json())


// rutas 
app.use('/api/auth',require('./routes/auth'));
app.use('/api/events',require('./routes/events'));



// todo: crud: eventos 

// escuchar peticiones 
app.listen(4000,()=>{
    console.log("Servidor corriendo en el puerto: http://localhost:4000");
}
)

