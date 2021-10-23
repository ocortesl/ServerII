const mongoose = require('mongoose');
const ProductoSchema = mongoose.Schema({
    id:{
        type: Number,
        require: true
    },
    nombre:{
        type: String,
        require: true
    },
    valor:{
        type: Number,
        require: true
    },
    stock:{
        type: Number,
        require: true
    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Producto', ProductoSchema);