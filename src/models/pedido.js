const mongoose = require("mongoose");

const pedidoSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
  items: [
    {
      producto: { type: mongoose.Schema.Types.ObjectId, ref: "Producto" },
      cantidad: Number
    }
  ],
  estado: {
    type: String,
    enum: ["pendiente", "pagado", "en proceso", "enviado", "entregado"],
    default: "pendiente"
  },
  metodoPago: { type: String, enum: ["paypal", "manual"], default: "paypal" },
  total: Number,
  direccionEnvio: String,
  fecha: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model("Pedido", pedidoSchema);

