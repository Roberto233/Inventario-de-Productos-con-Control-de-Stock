const express = require('express');
const connectDB = require('./config/db');
const applyGlobalMiddleware = require('./middlewares/global.middleware');

const categoriaRoutes = require('./routes/categoria.route');
const productoRoutes = require('./routes/producto.route');
const reporteController = require('./controllers/reporte.controller');

const app = express();

connectDB();
applyGlobalMiddleware(app);

app.use('/api/categorias', categoriaRoutes);
app.use('/api/productos', productoRoutes);
app.get('/api/reportes/stock-bajo', reporteController);

module.exports = app;
