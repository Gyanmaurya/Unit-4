


const express=require('express');
const Publication = require('../model/model.publication.js');
const { body, validationResult } = require('express-validator');
  const router=express.Router();
  router.post('',async(req,res)=>{

    try {
        const publication=await Publication.create(req.body);
        return res.status(200).send({publication:publication});
    } catch (error) {
     return res.status(500).send({error:error});
    }
  });
  module.exports=router;