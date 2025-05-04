const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  precio: { type: Number, required: true },
  categoria: String,
  imagenes: [String],
  stock: Number,
  tipo: { type: String, enum: ["producto", "patron", "curso"], default: "producto" }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);

