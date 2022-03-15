 const app=require("./index.js");
 const connect=require("./config/db.js");

 app.listen(5000, async()=>{
     try {
         await connect()
         console.log(" listening port 5000");
     } catch (error) {
         console.log(error);
     }
 })