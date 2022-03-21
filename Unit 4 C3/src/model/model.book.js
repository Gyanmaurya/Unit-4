

  const mongoose=require('mongoose');

  const bookSchema=new mongoose.Schema({
  likes:{type:Number,require:true,default:0},
  coverImage:{type:String,require:true},
  content:{type:String,require:true},
 
  
  },{
      versionKey:false,
      timestamps:true
  })
  const Book=mongoose.model('book',bookSchema);
  module.exports=Book;