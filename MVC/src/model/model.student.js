
const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
      
        roll_no:{type:String,require:true},
        current_batch:{type:String,require:true},

},{
    versionKey:false,
    timestamps:true
})
const Student=mongoose.model("student",studentSchema);
module.exports=Student;