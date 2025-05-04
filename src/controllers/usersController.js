const User= require ("../models/user");

exports.getProfile = async (req,res)=>{
    try {
        const usuario = await User.findById(req.usuario.id).select("-password");
        res.json(usuario);
      } catch (error) {
        res.status(500).json({ msg: "Error al obtener perfil", error });
      }
};

exports.updateProfile = async (req,res)=>{
    try {
        const updates = { nombre: req.body.nombre, email: req.body.email };
        const usuario = await User.findByIdAndUpdate(req.usuario.id, updates, { new: true }).select("-password");
        res.json(usuario);
      } catch (error) {
        res.status(400).json({ msg: "Error al actualizar perfil", error });
      }
};

exports.getWishlist = async (req,res)=>{
    try {
        const usuario = await User.findById(req.usuario.id).populate("wishlist");
        res.json(usuario.wishlist);
      } catch (error) {
        res.status(500).json({ msg: "Error al obtener wishlist", error });
      }
};

exports.addToWishlist = async (req,res)=>{
    try {
        const usuario = await User.findById(req.usuario.id);
        if (!usuario.wishlist.includes(req.params.productoId)) {
          usuario.wishlist.push(req.params.productoId);
          await usuario.save();
        }
        res.json(usuario.wishlist);
      } catch (error) {
        res.status(400).json({ msg: "Error al añadir a wishlist", error });
      }
};

exports.deleteToWishlist = async (req,res) =>{
    try {
        const usuario = await User.findById(req.usuario.id);
        usuario.wishlist = usuario.wishlist.filter(id => id.toString() !== req.params.productoId);
        await usuario.save();
        res.json(usuario.wishlist);
      } catch (error) {
        res.status(400).json({ msg: "Error al quitar de wishlist", error });
      }
};

exports.getUsers = async (req,res)=>{
    try {
        const usuarios = await User.find().select("-password");
        res.json(usuarios);
      } catch (error) {
        res.status(500).json({ msg: "Error al obtener usuarios", error });
      }
}
