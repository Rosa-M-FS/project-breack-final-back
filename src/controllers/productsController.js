const Product = require("../models/product");


exports.getProducts = async (req,res) =>{
    try {
        const productos = await Product.find();
        console.log("Productos:", productos); 
        res.json(productos);
      } catch (error) {
        console.error("Error en getProducts:", error);
        res.status(500).json({ msg: "Error al obtener productos", error });
      }
}

exports.getProductsById = async (req,res)=>{
    try {
        const producto = await Product.findById(req.params.id);
        if (!producto) return res.status(404).json({ msg: "Producto no encontrado" });
        res.json(producto);
      } catch (error) {
        res.status(500).json({ msg: "Error al obtener producto", error });
      }
};

exports.createProducts = async (req,res)=>{
    try {
        const producto = new Product(req.body);
        await producto.save();
        res.status(201).json(producto);
      } catch (error) {
        res.status(400).json({ msg: "Error al crear producto", error });
      }
}

exports.updateProducts = async (req,res)=>{
    try {
        const producto = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!producto) return res.status(404).json({ msg: "Producto no encontrado" });
        res.json(producto);
      } catch (error) {
        res.status(400).json({ msg: "Error al actualizar producto", error });
      }
}

exports.deleteProducts = async (req,res) =>{
    try {
        const producto = await Product.findByIdAndDelete(req.params.id);
        if (!producto) return res.status(404).json({ msg: "Producto no encontrado" });
        res.json({ msg: "Producto eliminado" });
      } catch (error) {
        res.status(500).json({ msg: "Error al borrar producto", error });
      }
}

exports.getCategory = async (req,res)=>{
    const categoria=req.params.categoria.trim();
    try{
        const productos = await Product.find({categoria:{$regex:`^${categoria}$`,$options:"i"}});
        console.log("productos encontrados",productos);
        res.json(productos);
      } catch (error) {
        res.status(500).json({ msg: "Error al obtener productos por categoria", error });
    }
}