const mongoose = require("mongoose");

const cursoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: String,
  fecha: String,
  duracion: String,
  plazas: Number,
  imagen: String
}, { timestamps: true });

module.exports = mongoose.model("Curso", cursoSchema);
