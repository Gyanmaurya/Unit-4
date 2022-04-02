

// get('/products')
// post('/products')
// get('/products/:id')
// patch('/products/:id')
// delete('/products/:id')


 const express=require('express');
const client = require('../config/redis.js');
 const router=express.Router();
 const Product=require("../model/model.product");


 router.get("", async (req, res) => {

    try {
        client.get("productdata",async function(error,fetchdata){
            

            if(fetchdata){
                const productdata=JSON.parse(fetchdata)
                return res.status(200).send({productdata,redis:true});
            }
            else{
                try {

                    const productdata= await Product.find({}).lean().exec();
                    client.set("productdata",JSON.stringify(productdata));
                    return res.status(200).send({productdata,redis:false});

                } catch (error) {
                    return res.status(501).send({message:error})
                }
               
              }

              const product = await Product.find({}).lean().exec();
              return res.status(200).send({product});
        });
       
        // return res.status(200).send("{product:product}");
    } catch (error) {
        return res.status(501).send({message:error})
        console.log(error)
    }
});



 router.post("", async (req, res) => {

    try {
        const product = await Product.create(req.body);
          const productdata= await Product.find({}).lean().exec();
          client.set("productdata",JSON.stringify(productdata));

        return res.status(200).send({product});
        
    } catch (error) {
        return res.status(501).send({message:error})
        console.log(error)
    }
});




 router.get("/:id", async (req, res) => {

    try {
           client.get(`productdata.${req.params.id}`,async function(fetchdata){
             
              if(fetchdata){
             const productdata=JSON.parse(fetchdata);
             return res.status(200).send({productdata , redis:true});
              }

              else{
                  try {
                    const productdata= await Product.findById(req.params.id).lean().exec();
                    client.set(`productdata.${req.params.id}`,JSON.stringify(productdata));
                    return res.status(200).send({productdata,redis:false});
                  } catch (error) {
                    return res.status(501).send({message:error})
                  }
              }
           })

        // const product = await Product.findById(req.params.id);
        // return res.status(200).send({product:product});
        
    } catch (error) {
        return res.status(501).send({message:error})
        console.log(error)
    }
});
 router.patch("/:id", async (req, res) => {

    try {
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).send({product:product});
       
    } catch (error) {
        return res.status(501).send({message:error})
        console.log(error)
    }
});
 router.delete("/:id", async (req, res) => {

    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        return res.status(200).send({product:product});
       
    } catch (error) {
        return res.status(501).send({message:error})
        console.log(error)
    }
});

module.exports=router;