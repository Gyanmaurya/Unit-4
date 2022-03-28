

const { default: mongoose } = require("mongoose");



const todoSchema= new mongoose.Schema({
    title :{type:String,require:true},
  user_Id:{type:mongoose.Schema.Types.ObjectId,ref:"users",require:true},


},{
    versionKey:false,
    timestamps:true
})

const Todo=mongoose.model("todo",todoSchema);
module.exports=Todo;