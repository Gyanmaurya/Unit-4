
const mongoose=require('mongoose');

const gallarySchema= new mongoose.Schema({
    userPic:{type:String,require:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true}
    
},{
    versionKey:false,
    timestamps:true
})
const Gallary=mongoose.model("gallary",gallarySchema);
module.exports=Gallary;