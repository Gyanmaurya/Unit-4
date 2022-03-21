const express=require('express');
 const app=express();
 module.exports=app;
 app.use(express.json());

 const userController=require("./controller/controller.user");
 app.use("/users",userController);
 const bookController=require("./controller/controller.book");
 app.use("/books",bookController);
 const publicationController=require("./controller/controller.publication");
 app.use("/publications",publicationController);
 const commentController=require("./controller/controller.comment");
 app.use("/comments",commentController);