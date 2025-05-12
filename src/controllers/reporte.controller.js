const Producto = require('../models/producto.model');

module.exports = async (req, res) => {
  const productos = await Producto.find({ stock: { $lt: 5 } }).populate('categoria', 'nombre');
  res.json({ total: productos.length, productos });
};
