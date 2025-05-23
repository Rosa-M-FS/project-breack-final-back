const express = require ("express");
const router = express.Router();
const {auth,isAdmin}=require("../middlewares/auth");
const {getProducts,getProductsById,createProducts,deleteProducts, updateProducts,getCategory}=require("../controllers/productsController");

router.get("/", getProducts);


router.get("/:id",getProductsById);


router.post("/", auth, isAdmin, createProducts);


router.put("/:id", auth, isAdmin, updateProducts);


router.delete("/:id", auth, isAdmin, deleteProducts);

router.get("/category/:categoria",getCategory);

module.exports=router;
