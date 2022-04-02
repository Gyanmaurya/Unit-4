 const Product=require("../model/model.product")

 const express=require('express');
 const athenticate=require("../middleware/athenticate")
 const athorise=require("../middleware/athorise");
 const router=express.Router();

 router.post("",athenticate,async(req,res)=>{
    req.body.user_Id=req.userID
   try {
       const product =await Product.create(req.body);
      return res.status(200).send(product)
   } catch (error) {
      return res.status(400).send({message : err.message})
   }

 })
 router.get("", async (req, res) => {

    try{
        const product = await Product.find()
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})
 router.patch("/:id",athenticate,athorise(["admin","seller"]), async (req, res) => {

    try{
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

 module.exports=router;