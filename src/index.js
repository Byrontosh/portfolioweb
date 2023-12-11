// CARGAR TODAS LAS VARIABLES DE ENTORNO
require('dotenv').config()



// IMPORTAR LA VARIABLE APP
const app = require('./server.js')

// IMPORTAR EL MÉTODO CONNECTION
const connection = require('./database.js')


// EJECUTAR EL MÉTODO CONNECTION
connection()




// EJECUTAR EN SERVIDOR EN EL PUERTO 3000
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
})