    const mongoose=require('mongoose');
    const userSchema=new mongoose.Schema({
     first_name:{type:String,require:true},
     last_name:{type:String,require:true},
     email:{type:String,require:true,unique:true},
     pincode:{type:String,require:true},
     age:{type:String,require:true},
     gender:{type:String,require:true,default:"male",enum:["male","femail","other"]},


    },{
        versionKey:false,
        timestamps:true
    })
    const User=mongoose.model("users",userSchema);
    module.exports=User;

    //Create an express application Create a user model with following fields first_name, last_name, email, pincode, age, gender,