


const mongoose=require('mongoose');

const commentSchema=new mongoose.Schema({

body:{type:String,require:true},
userId:{type:mongoose.Schema.Types.ObjectId,ref:"users",require:true},
bookId:{type:mongoose.Schema.Types.ObjectId,ref:"books",require:true},



},{
    versionKey:false,
    timestamps:true
})
const Comment=mongoose.model('comment',commentSchema);
module.exports=Comment;