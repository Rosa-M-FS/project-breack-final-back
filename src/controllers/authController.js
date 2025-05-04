const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.login = async (req,res)=>{
    try{
        const {email,password}=req.body;
        const usuario = await User.findOne({email});
        if(!usuario) return res.status(400).json({msg:"Usuario o contraseña incorrectos"})
        
        const validPass = await bcrypt.compare(password, usuario.password);
        if(!validPass) return res.status(400).json({msg:"Usuario o contraseña incorrectos"})
    
        const token = jwt.sign(
            { id: usuario._id, isAdmin: usuario.isAdmin },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
            );
    
            res.json({
            token,
            usuario: {
                id: usuario._id,
                nombre: usuario.nombre,
                email: usuario.email,
                isAdmin: usuario.isAdmin,
            }
            });
    
    }catch (err) {
      res.status(500).json({ msg: "Error al hacer login", err });
    }
};


exports.register = async (req,res)=>{
    try {
        const { nombre, email, password } = req.body;
        const userExist = await User.findOne({ email });
        if (userExist) return res.status(400).json({ msg: "El email ya está registrado" });
    
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
    
        const nuevoUsuario = new User({ nombre, email, password: hash });
        await nuevoUsuario.save();
    
        res.status(201).json({ msg: "Usuario registrado con éxito" });
      } catch (err) {
        res.status(500).json({ msg: "Error al registrar", err });
    }
}