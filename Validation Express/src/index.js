 const express=require('express');
 const app=express();

 app.use(express.json());
const userController=require("./controller/controller.user.js");
 app.use("/users",userController)

 module.exports=app;
