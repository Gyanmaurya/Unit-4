

const mongoose=require('mongoose');

const evaluationSchema=new mongoose.Schema({
      
    dateOfEvaluation:{type:Date,requir:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true},
    batchId:{type:mongoose.Schema.Types.ObjectId,ref:"batch",require:true}

},{
    versionKey:false,
    timestamps:true
})
const Evaluation=mongoose.model("evaluation",evaluationSchema);
module.exports=Evaluation;