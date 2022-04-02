

const express=require('express');
const app=express();

app.use(express.json());

const productController=require("./controller/controller.product.js")

app.use("/products",productController);

module.exports=app;