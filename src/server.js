// IMPORTACIÓN DE EXPRESS
const express = require('express')
// IMPORTACIÓN DE PATH
const path = require('path');
// IMPORTAR HANDLEBARS
const { engine }  = require('express-handlebars')



// Inicializaciones
// INSTANCIAR EXPRESS
const app = express()



// Configuraciones 
// VARIABLES DE CONFIGURACIÓN
app.set('port',process.env.port || 3000)
app.set('views',path.join(__dirname, 'views'))


// ESTABLECER EL PATH DE LA CARPETA VIEWS
app.set('views',path.join(__dirname, 'views'))
// ESTABLECER LAS CONFIGURACIONES EXTRAS
app.engine('.hbs',engine({
    // ESTABLECER EL MASTER PAGE
    defaultLayout:'main',
    // ESTABLECER EL  PATH DE LA CARPETA LAYOUTS
    layoutsDir: path.join(app.get('views'),'layouts'),
    // ESTABLECER EL  PATH DE LA CARPETA PARTIALS
    partialsDir: path.join(app.get('views'),'partials'),
    // ESTABLECER LA EXTENSIÓN DE LAS PAGINAS
    extname:'.hbs'
}))
// ESTABLECER EL MOTOR DE PLANTILLAS
app.set('view engine','.hbs')






// Middlewares 
// SERVIDOR VA A TRABAJAR CON INFORMACIÓN EN BASE A FOMRULARIOS
app.use(express.urlencoded({extended:false}))


// Variables globales


// Rutas
app.use(require('./routers/index.routes'))


// Archivos estáticos
// DEFINIR ARCHIVO ESTÁTICOS Y PÚBLICOS
app.use(express.static(path.join(__dirname,'public')))


// EXPORTAR LA VARIABLE APP
module.exports = app

