import  express  from "express";
 const app=express();
 console.log(app)
 const port=4000;
   
 
 app.use(logger);
 app.get("/books/:gameOfThron",function(req,res){
    return res.send({BooksName:"gameOfThron"})
     
 })
 
 app.get("/books/:HarryPoter",(req,res)=>{
    return res.send({BooksName:"HarryPoter"})
 })
 
 app.listen(port,function(){
   console.log(`Im here at http://localhost:${port}`)
 })
 
 function logger(req,res,next){
     if(req.name==="/books/:gameOfThron"){
        req.name="gameOfThron";
     }
     else if(req.name==="/books/:HarryPoter"){
           req.name="HarryPoter";
     }
     next();
 }




