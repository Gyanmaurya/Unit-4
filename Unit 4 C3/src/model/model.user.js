const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
firsName:{type:String,require:true},
lastName:{type:String,require:true},
age:{type:Number,require:true},
email:{type:String,require:true,unique:true},
profileImages:[{type:String,require:true}],
bookId:{type:mongoose.Schema.Types.ObjectId,ref:"books",require:true},

},{
    versionKey:false,
    timestamps:true
})
const User=mongoose.model('user',userSchema);
module.exports=User;