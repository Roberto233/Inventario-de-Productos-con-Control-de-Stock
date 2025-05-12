// server.js
require('dotenv').config(); // Carga las variables de entorno
const app = require('./src/app'); // Importa la app con middlewares y rutas
const connectDB = require('./src/config/db'); // Conecta a MongoDB

const PORT = process.env.PORT || 3000;

// Primero conecta a MongoDB, luego levanta el servidor
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  });
}).catch(err => {
  console.error('❌ Error al conectar con MongoDB:', err);
});
