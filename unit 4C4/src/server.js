

   const connectdb=require('./config/db');
   const app=require("./index");
        app.listen(5000,async()=>{
        await connectdb();
        console.log("listening port 5000")
      });