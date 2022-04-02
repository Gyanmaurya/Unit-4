const express=require('express');
const app=express();

app.use(express.json());
const {register,loggin}=require("./controller/controller.auth")

const userController=require("./controller/controller.user");
const productController=require("./controller/controller.product");
app.use("/users",userController);
app.use("/product",productController);
app.post("/register",register)
app.post("/loggin",loggin)

module.exports=app;