const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productoSchema = new Schema({
    imagen: {type: String, required: [true, 'Imagen obligatoria']},
    nombre: {type: String, required: [true, 'Nombre obligatorio']},
    precio: {type: String, required: [true, 'Precio obligatorio']},
    agregarCategoria:String,
    usuarioId: String,
    date:{type: Date, default: Date.now},
    activo: {type: Boolean, default: true}
});
// convertir a modelo
const Producto = mongoose.model('Producto', productoSchema);
module.exports= Producto;
