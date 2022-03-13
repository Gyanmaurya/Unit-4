
 const mongoose=require('mongoose');



const userSchema=new mongoose.Schema({
    firstName:{type:String,require:true},
    lastName:{type:String,require:true},
    gender:{type:String,require:true},
    dateOfBirth:{type:String,require:true}
 
   },{
       versionKey:false,
       timestamps:true
   })
   const User=mongoose.model('user',userSchema);
   module.exports=User;