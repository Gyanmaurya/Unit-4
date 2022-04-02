 
  const path=require('path');
  const multer=require('multer');


  

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../my_uploads"));
    },
    filename: function (req, file, callback) {
        const uniquePrefix = Date.now();
        callback(null, uniquePrefix + "-" + file.originalname);
      }
  });


  const fileFilter= (req, file, cb)=> {

    if(file.mimetype==="image/jpg" || file.mimetype==="image/png"){
         cb(null,true)
    }else {
        // To reject this file pass `false`, like so:
        cb(new Error("Incorrect mime type"), false);
      }
  
  };


  const option={
    storage,
    fileFilter,
    limits:{
        fieldSize:1024*1024*5,
    },
   

  }
  const uploads=multer(option);
  module.exports=uploads;