// index.js
// ===========================
// Servidor básico con Express
// Proyecto: sistema-reservas-backend
// ===========================

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para manejar JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.json({ mensaje: 'API de Sistema de Reservas funcionando 🚀' });
});

app.get('/reservas', (req, res) => {
  // Aquí iría la lógica para obtener las reservas desde una base de datos
  res.json({ mensaje: 'Lista de reservas' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});