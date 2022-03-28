

  
const jwt = require('jsonwebtoken');
  require('dotenv').config();

  const verifyToken=(token)=>{
      return new Promise((res,rej)=>{
          jwt.verify(token,process.env.secret_file,(error,decode)=>{
              if(error){
                  return rej(error)
              }
              else{
                  return res(decode)
              }
          })
      })
  }

  const authentication=async(req,res,next)=>{
 if(!req.header.authorization){
    return   res.status(401).send({message:"authorisation failed"})
 };
 const token=req.header.authorization.trim().split(" ")[1]
    let decode;
    try {
        decode=await verifyToken(token)
    } catch (error) {
        console.log(error)
    }
    req.user_Id=decode.user._id;
    return next();
  };
  module.exports=authentication;