
// const express=require('express');

const connectdb = require("./config/db.js")
const app =require("./index.js")


app.listen(5000,async()=>{
    try {

        await connectdb();
        console.log("listening port 5000")
    } catch (error) {
        console.log(error)
    }
    
})
// module.exports=app;