const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const equipoSchema = new Schema({
    imagen: {type: String, required: [true, 'Imagen obligatoria']},
    nombre: {type: String, required: [true, 'Nombre obligatorio']},
    apellido: {type: String, required: [true, 'Apellido obligatorio']},
    cargo: {type: String, required: [true, 'cargo obligatorio']},
    usuarioId: String,
    date:{type: Date, default: Date.now},
    activo: {type: Boolean, default: true}
});
// convertir a modelo
const Equipo = mongoose.model('Equipo', equipoSchema);
module.exports= Equipo;
