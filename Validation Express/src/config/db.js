  const mongoose=require('mongoose');

  module.exports=()=>{
      return mongoose.connect('mongodb://127.0.0.1:27017/validation')
  }

  // mongodb://127.0.0.1:27017/
  //mongodb+srv://gyanbhai:12345@cluster0.knykf.mongodb.net/validation?retryWrites=true&w=majority