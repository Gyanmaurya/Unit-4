
const User=require("../model/model.user")
const jwt = require('jsonwebtoken');
require('dotenv').config()
const gyantoken=(user)=>{
    // console.log(process.env.secret_file)
  return jwt.sign({ user }, process.env.secret_file)

}
const register=async(req,res)=>{
try {
    let user=await User.findOne({email:req.body.email})
    if(user){
        return res.status(400).send("User already register")
    }
     user=await User.create(req.body);
     const token=gyantoken(user)
     return res.status(200).send({user, token});
   
} catch (error) {
    console.log(error)
}

}



const loggin=async(req,res)=>{
try {
   const user=await User.findOne({email:req.body.email});
   if(!user){
    return  res.status(200).send("Email or Password Invalid")
   }
const match=user.checkPassword(req.body.password)
if(!match){
    return  res.status(200).send("Email or Password Invalid")
}
    const token=gyantoken(user)
    return res.status(200).send({user, token});
 
//   return  res.status(200).send()
} catch (error) {
    console.log(error)
}

}
module.exports={register,loggin}