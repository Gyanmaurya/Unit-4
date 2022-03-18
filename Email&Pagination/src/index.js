 const express=require('express');
 const app=express();
 module.exports=app;
 const mongoose=require('mongoose')
 
app.use(express.json());
 const userController=require("./controller/controller.user.js");

 const transporter=require("./config/mail.js")

 

 app.use("/users",userController)