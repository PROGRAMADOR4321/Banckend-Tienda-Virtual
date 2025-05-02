const express = require('express');
const router = express.Router();
const Categoria = require('../models/Categoria');

// GET /api/categorias
router.get('/', async (req, res) => {
  try {
    const list = await categoria.find(); // Busca en "categoria"
    res.json(list);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener categorías' });
  }
});

module.exports = router;