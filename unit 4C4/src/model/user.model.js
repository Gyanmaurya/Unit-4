const { default: mongoose } = require("mongoose");

const bcrypt = require('bcrypt');

  const userSchema= new mongoose.Schema({
    firstName:{type:String,require:true},
    lastName:{type:String},
    email:{type:String,require:true},
    password:{type:String,require:true},


  },{
      versionKey:false,
      timestamps:true
  })


 userSchema.pre("save",function(next){
const hash=bcrypt.hashSync(this.password,9);
this.password=hash;
return next();
 })
 userSchema.method.checkPassword=function(password){
     return bcrypt.compareSync(password,this.password)
 }
 const User=mongoose.model("user",userSchema);
 module.exports=User;