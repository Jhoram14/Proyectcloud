const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//Importar rutas
const citaRoutes = require('./routes/cita')


//config
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'cloudproyect.mysql.database.azure.com',
    user: 'user',
    password: 'Proyect2',
    port: 3306,
    database: 'bdcloud'
}, 'single'));

app.use(express.urlencoded({extended: false}));

//Rutas
app.use('/', citaRoutes);

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Iniciando server
app.listen(app.get('port'), ()=>{
    console.log('Server on port 3000');
});