  

  const User=require("../model/user.model");
  const jwt = require('jsonwebtoken');
  require('dotenv').config();
  
  const checkToken=(user)=>{
      console.log(process.env.secret_file)
      return jwt.sign({user},process.env.secret_file)
  }

  const register=async(req,res)=>{
      try {
          
          let user= await User.findOne({email:req.body.email});
          if(user){
            return   res.status(401).send("user already register please login")
          }
          user= await User.create(req.body);
          const token=checkToken(user);
          return   res.status(200).send({user,token});

      } catch (error) {
        console.log(error)
          return   res.status(401).send({message:error.message})
      }
  }


  const login=async(req,res)=>{
      try {
          let user= await User.findOne({email:req.body.email});
          if(!user){
            return   res.status(401).send("user password or email are invalid")
          }
          const match=user.checkPassword(req.user.password);
          if(!match){
            return   res.status(401).send("user password or email are invalid")
          }
          const token=checkToken(user);
          return   res.status(200).send({user,token});

      } catch (error) {
        console.log(error)
          return   res.status(401).send({error:error})
         
      }
  }

  module.exports={register,login}