


  const athorise=(role)=>{
      return (req,res,next)=>{
console.log(req.user);

       return next();
       }


  };
  module.exports=athorise;