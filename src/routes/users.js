const express = require ("express");
const router = express.Router();
const User = require("../models/user");
const {auth,isAdmin} =require ("../middlewares/auth");
const {getProfile,updateProfile,getWishlist,addToWishlist,deleteToWishlist,getUsers} = require ("../controllers/usersController");


router.get("/me", auth, getProfile);


router.put("/me", auth, updateProfile);


router.get("/me/wishlist", auth, getWishlist);


router.post("/me/wishlist/:productoId", auth, addToWishlist);


router.delete("/me/wishlist/:productoId", auth, deleteToWishlist);

router.get("/", auth, isAdmin,getUsers);

module.exports=router;
