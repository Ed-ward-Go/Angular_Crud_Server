const express = require('express')
const morgan = require('morgan')   
const cors = require('cors')    

const app = express()

app.set('port', process.env.PORT || 4000);

app.use(cors())
app.use(morgan('dev'))
//para que express reconozca formatos json y otros
app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use("/api/empleados",require('./rutas/empleados.rutas'))

module.exports = app;