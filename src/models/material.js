const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema({
  tipo: { type: String, required: true }, 
  nombre: { type: String, required: true },
  colores: [String]
}, { timestamps: true });

module.exports = mongoose.model("Material", materialSchema);

