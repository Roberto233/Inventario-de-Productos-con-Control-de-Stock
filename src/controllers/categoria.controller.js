const Categoria = require('../models/categoria.model');

exports.crear = async (req, res) => {
  try {
    const existente = await Categoria.findOne({ nombre: req.body.nombre });
    if (existente) {
      return res.status(400).json({ error: 'Ya existe una categoría con ese nombre.' });
    }

    const nueva = new Categoria(req.body);
    const guardada = await nueva.save();
    res.status(201).json({ mensaje: 'Categoría creada correctamente', categoria: guardada });

  } catch (err) {
    res.status(500).json({ error: 'Error al crear categoría', detalle: err.message });
  }
};

exports.listar = async (req, res) => {
  const categorias = await Categoria.find();
  res.json(categorias);
};

exports.actualizar = async (req, res) => {
  try {
    const actualizada = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizada) return res.status(404).json({ error: 'Categoría no encontrada' });
    res.json(actualizada);
  } catch (err) {
    res.status(400).json({ error: 'Error al actualizar categoría', detalle: err.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const eliminada = await Categoria.findByIdAndDelete(req.params.id);
    if (!eliminada) return res.status(404).json({ error: 'Categoría no encontrada' });
    res.json({ mensaje: 'Categoría eliminada' });
  } catch (err) {
    res.status(400).json({ error: 'Error al eliminar categoría', detalle: err.message });
  }
};
