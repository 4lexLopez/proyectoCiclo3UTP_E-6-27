const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    nombre: {type: String, required: [true, 'Nombre obligatorio']},
    pass: {type: String, required: [true, 'cargo obligatorio']},
    usuarioId: String,
    date:{type: Date, default: Date.now},
    activo: {type: Boolean, default: true}
});
// convertir a modelo
const User = mongoose.model('User', userSchema);
module.exports= User;
