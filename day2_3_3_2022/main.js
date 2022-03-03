const express=require("express");
const app=express();


app.get("/books",function(req,res){
 res.send({Book1:"Ramayan",
           Book2:"Mahabharat",
           Book3:"Gita",
           Books:"Rich Dad and Poor Dad"
});
});
app.listen(5001, ()=>{
    console.log("This is books")
});