


const connectdb = require('./config/db');
const app=require("./index.js");
app.listen(5000,async()=>{

     try {
         await connectdb();
         console.log("listening port 5000")
     } catch (error) {
         console.log(error)
     }

})







