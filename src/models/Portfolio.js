// IMPORTAR EL ESQUEMA Y EL MODELO
const {Schema, model} = require('mongoose')


// CRERA UN NUEVO ESQUEMA -- portfolioSchema
const portfolioSchema = new Schema({
    
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category :{
        type:String,
        require:true
    }
},{
    timestamps:true
})

// EXPORTAR EL MODELO
module.exports = model('portfolio',portfolioSchema)
