const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  descuento: { type: Number, default: 0 },
  descripcion: { type: String, required: true },
  categoriaId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Categoria', 
    required: true 
  },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);