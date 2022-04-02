
  const mongoose=require('mongoose');
  const bcrypt=require('bcrypt');

 const  userSchema=new mongoose.Schema({
     email:{type:String,require:true},
     password:{type:String,require:true},
     role:[{type:String,require:true}],

 },{
     versionKey:false,
     timestamps:true
 }) 
 
 userSchema.pre("save",function(next){
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;

    return next()
 })

 /// creating our own methods like pre method provide by bcrept
 userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}
 const User=mongoose.model("user",userSchema);
 module.exports=User;