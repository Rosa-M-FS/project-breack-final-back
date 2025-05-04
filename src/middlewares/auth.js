const jwt = require ("jsonwebtoken");


const auth = (req,res,next) => {
    const token = req.header ("Authorization");
    if(!token) return res.status(401).json({msg:"Token inválido. Acceso denegado"})
    
    try {
        const decoded = jwt.verify(token.replace("Bearer",""),process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }catch(err){
        res.status(400).json({msg:"Token no válido"});
    }
}

const isAdmin=(req,res,next)=>{
    if(req.user && req.user.isAdmin){
        next();
    }else{
        res.status(403).json ({msg:"Solo administradores"});
    }
}

module.exports ={auth,isAdmin};
