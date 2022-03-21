  
  const express=require('express');
const User = require('../model/model.user');
  const router=express.Router();
  const { body, validationResult } = require('express-validator');

  router.get('',async(req,res)=>{
   try {
       const user=await User.find({}).lean().exec();
       return res.status(200).send({usersss:user});
   } catch (error) {
    return res.status(500).send({error:error});
   }

  });
  router.post('',
  body("firstName").not().isEmpty().isLength({min:3,max:30}),
  body("lastName").not().isEmpty().isLength({min:3,max:30}),
  body("age").not().isEmpty().custom((value)=>{
      if(value<1 && value>150){
          throw new Error("Age is not valid for application")
      }
      return true;
  }),
  body("email").not().isEmpty().custom(async(val)=>{
      const user= await User.findOne({email:val});
      if(user){
          throw new Error("Email is Dublicate");
      }
      return true;
  })
  
  
  
  
  
  ,async(req,res)=>{
   try {
       const user=await User.create(req.body);
       return res.status(200).send({user:user});
   } catch (error) {
    return res.status(500).send({error:error});
   }

  });
  module.exports=router;