const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Product = require('../models/Product');

// GET /api/products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().populate('categoriaId', 'nombre descripcion');
    res.json(products);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener productos' });
  }
});

module.exports = router;