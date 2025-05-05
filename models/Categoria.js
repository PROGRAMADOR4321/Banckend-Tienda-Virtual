const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    }
  },
  { collection: "categories" } 
);

module.exports = mongoose.model("Categoria", categoriaSchema);