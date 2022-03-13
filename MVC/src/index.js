 const express=require('express');
//  const mongoose=require('mongoose');
 const app=express();
  app.use(express.json());
 
 const connectdb=require("./config/db.js");
 module.exports=app;

// const User=require("./model/model.user.js");
// const Student=require("./model/model.student.js");
// const Submission=require('./model/model.submision.js');
// const Batch=require('./model/model.batch.js');
// const Evaluation=require('./model/model.evaluation.js')
  // user schema 
  
 const userController=require("./controller/controller.user.js")
 const studentController=require("./controller/controller.student.js")
 const submissionController=require("./controller/controller.submision.js")
 const batchController=require("./controller/controller.batch.js")
 const evaluationController=require("./controller/controller.evaluation.js")
 
 app.use("/users",userController);
 app.use("/batchs",batchController);
 app.use("/students",studentController);
 app.use("/evaluations", evaluationController);
 app.use("/submisions",submissionController);










 