   

 const express=require('express');
 const router=express.Router();
 const User=require("../model/model.user.js")
 const { body, validationResult } = require('express-validator');;
//  console.log(validationResult);
 

 router.post("/",
  body('first_name').trim().not().isEmpty().isLength({min:2,max:15}).withMessage("Name should be 5 less than five charater"),body("email").isEmail().withMessage("Email is not Valid ").custom(async(value)=>{
      const user=await User.findOne({email:value});
      if(user){
          throw new Error("email is dublicate")
      }
     return true
  }),
  body("age").not().isEmpty().custom((value)=>{
     if(value<1 || value>100){
         throw new Error("Age is not valid ")
     }
     return true
  }),
  body("last_name").not().isEmpty().isLength({min:2,max:15}),
  body("pincode").not().isEmpty().isLength({max:6,min:6}).isNumeric().withMessage("Pincode must be 6 number"),
  body("gender").not().isEmpty().isIn(['Male','Femail','other']).withMessage("Gender should be male or femail or other"),
 
 async(req,res)=>{
    
   
    try {
        console.log(body('first_name'))

        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const user=await User.create(req.body);
    res.status(200).send({user:user})    
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
  

 })
 module.exports=router;

