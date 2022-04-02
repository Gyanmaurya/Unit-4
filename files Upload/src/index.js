const express=require('express');
const app=express();

app.use(express.json());

const userController=require("./controller/controller.user.js")
const gallaryController=require("./controller/controller.gallary.js")

app.use("/users",userController);
app.use("/gallary",gallaryController);

module.exports=app;