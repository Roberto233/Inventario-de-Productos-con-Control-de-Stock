const mongoose = require('mongoose');
const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' },
  historial: [
    {
      tipo: { type: String, enum: ['entrada', 'salida'] },
      cantidad: Number,
      fecha: { type: Date, default: Date.now }
    }
  ]
});
module.exports = mongoose.model('Producto', productoSchema);