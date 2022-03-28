

const express=require('express');
const { register, login } = require('./controller/auth.controller');
const app=express();
app.use(express.json());
// const userController=require('./controller/user.controller')

 app.post("/register",register)
 app.post("/login",login)


module.exports=app;