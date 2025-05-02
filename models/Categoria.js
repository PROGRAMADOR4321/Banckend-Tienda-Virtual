const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
  nombre: 
  { 
    type: String, 
    required: true, 
    unique: true 

},
  descripcion:

  { 
    type: String, 
    required: true 
},

created_at:
    {
        type: Date,
        default: Date.now
    },

});
module.exports = mongoose.model('categoria', categoriaSchema);