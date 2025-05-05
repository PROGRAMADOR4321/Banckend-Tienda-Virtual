const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); // Importa mongoose
const Categoria = require('../models/Categoria'); // Importa el modelo Categoria

router.get('/', async (req, res) => {
  try {
    console.log("Conectado a la DB:", mongoose.connection.readyState); // Debe ser 2 (conectando) o 1 (conectado)
    const list = await Categoria.find();
    console.log("Documentos encontrados:", list); // Verifica en la consola del servidor
    res.json(list);
  } catch (error) {
    console.error("Error en la consulta:", error);
    res.status(500).json({ msg: 'Error al obtener categorías' });
  }
});

module.exports = router;