const express=require('express');
const app=express();

app.use(express.json());
const {register,loggin,gyantoken}=require("./controller/controller.auth")
const passport=require("./config/google.outh")

const userController=require("./controller/controller.user");
const productController=require("./controller/controller.product");
app.use("/users",userController);
app.use("/product",productController);
app.post("/register",register);
app.post("/loggin",loggin);



app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile',"email"] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login',session: false }),
  function(req, res) {
    // Successful authentication, redirect home.
    const token=gyantoken(req.user)
    res.status(200).send({user:req.user,token})
  });




module.exports=app;