
const mongoose=require('mongoose');

const submissionSchema=new mongoose.Schema({
      
      evaluationId:{type:mongoose.Schema.Types.ObjectId,ref:"evaluation",require:true},
      userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true}


},{
    versionKey:false,
    timestamps:true
})
const Submission=mongoose.model("submission",submissionSchema);
module.exports=Submission;