import express from 'express';
const app=express();
const port=4000;
  app.use(middleware)
app.get("/books",(req,res)=>{
 return res.send({Books1:"BagawatGita",
           Books2:"Ramayan",
           Books3:"Thermodyanamics"          
})
})
app.get("/",(req,res)=>{
 return res.send("Api is not working")
})

app.listen(port,()=>{
    console.log("Running Books Api site")
})
function middleware(req,res,next){
   console.log("Fetching all books")
    next();
}



