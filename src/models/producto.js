const mongoose = require('mongoose');
const {Schema} = mongoose;

const productoSchema = new Schema({
    Nombre: { type: String, required: true },
    Categoria: { type: String, require: true },
    Proveedor: { type: String, require: true},
    Precio: {type: Number, defult: 0},
    Existencia: {type: Number, default: 0},
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('producto', productoSchema)