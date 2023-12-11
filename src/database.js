// IMPORTAR MONGOOSE
const mongoose = require('mongoose')



//const MONGODB_URI = 'mongodb+srv://byrontosh:sistemas@cluster0.6e8zntc.mongodb.net/test'


// CREAR UN MÉTODO PARA HACER LA CADENA DE CONEXIÓN

connection = async()=>{
    try {
        // INVOCAR AL MÉTODO CONNECT
        await mongoose.connect(process.env.MONGODB_URI)
        // RESPUESTA DE LA PROMESA == "OK"
        console.log("Database is connected")
    } catch (error) {
        // RESPUESTA DE LA PROMESA == "ERROR"
        console.log(error);
    }
}

// EXPORTAR EL MÉTODO CONNECT
module.exports = connection

