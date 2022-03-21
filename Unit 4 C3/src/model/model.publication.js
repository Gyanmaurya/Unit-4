


const mongoose=require('mongoose');

const publicationSchema=new mongoose.Schema({

Name:{type:String,require:true},
bookId:{type:mongoose.Schema.Types.ObjectId,ref:"books",require:true},
},{
    versionKey:false,
    timestamps:true
})
const Publication=mongoose.model('publication',publicationSchema);
module.exports=Publication;