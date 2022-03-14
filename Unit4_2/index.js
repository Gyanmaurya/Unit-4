 const express=require('express');
 const app=express();
 const mongoose=require('mongoose');

  const connectdb=()=>{
      return mongoose.connect('mongodb://127.0.0.1:27017/account')
  }
// user schema
     const userSchema=new mongoose.Schema({

      firstName:{type:String,require:true},
      middleName:{type:String},
      lastName:{type:String,require:true},
      age:{type:Number,require:true},
      email:{type:String,require:true},
      address:{type:String,require:true},
      type:{type:String,require:true},
      gender:{type:String},

     },{
         timestamps:true,
         versionKey:false
     })
// user model 
const User=mongoose.model("user",userSchema);

app.get("/users",async(req,res)=>{
    try {
        const user= await Master.find({}).lean().exec();
        res.status(200).send({user:user});
    } catch (error) {
        res.status(500).send(error);
    }
})

//Branch Schema
const branchSchema=new mongoose.Schema({

    Name:{type:String,require:true},
    address:{type:String,require:true},
    IFSC:{type:String,require:true},
    MICR:{type:Number,require:true},
    masterId:{type:mongoose.Schema.Types.ObjectId,ref:"master",require:true},
    savingId:{type:mongoose.Schema.Types.ObjectId,ref:"saving",require:true},
    fixedId:{type:mongoose.Schema.Types.ObjectId,ref:"fixed",require:true},

   },{
       timestamps:true,
       versionKey:false
   })
// branch model 
const Branch=mongoose.model("branch",branchSchema);

//master schema
const masterSchema=new mongoose.Schema({

    
    balance:{type:Number,require:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true},
    branchId:{type:mongoose.Schema.Types.ObjectId,ref:"branch",require:true},

   },{
       timestamps:true,
       versionKey:false
   })
// master model 
const Master=mongoose.model("master",masterSchema);

// all details of master account

app.get("/masters",async(req,res)=>{
    try {
        const master= await Master.find({}).populate({path:"userId",select:{firstName:1}}).lean().exec();
        res.status(200).send({master:master});
    } catch (error) {
        res.status(500).send(error);
    }
})
app.get("/masters/:id",async(req,res)=>{
    try {
        const master= await Master.find(req.params.id).populate({path:"userId"}).lean().exec();
        res.status(200).send({master:master});
    } catch (error) {
        res.status(500).send(error);
    }
})
app.patch("/masters/:id",async(req,res)=>{
    try {
        const master= await Master.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        res.status(200).send({master:master});
    } catch (error) {
        res.status(500).send(error);
    }
})


// saving schema
const savingSchema=new mongoose.Schema({

    
    balance:{type:Number,require:true},
    account_no:{type:Number,require:true},
    intrest_rate:{type:Number,require:true},
    branchId:{type:mongoose.Schema.Types.ObjectId,ref:"branch",require:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true},

   },{
       timestamps:true,
       versionKey:false
   })
// saving model
const Saving=mongoose.model("saving",savingSchema);

app.post("/savings",async(req,res)=>{
    try {
        const saving= await Saving.create(req.body);
        res.status(200).send({saving:saving});
    } catch (error) {
        res.status(500).send(error);
    }
})


// fixed schema

const fixedSchema=new mongoose.Schema({

    
    balance:{type:Number,require:true},
    account_no:{type:Number,require:true},
    intrest_rate:{type:Number,require:true},
    startDate:{type:Number,require:true},
    maturityDate:{type:Number,require:true},
    branchId:{type:mongoose.Schema.Types.ObjectId,ref:"branch",require:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true},

   },{
       timestamps:true,
       versionKey:false
   })
// fixed model
const Fixed=mongoose.model("fixed",fixedSchema);

app.post("/fixeds",async(req,res)=>{
    try {
        const fixed= await Fixed.create(req.body);
        res.status(200).send({fixed:fixed});
    } catch (error) {
        res.status(500).send(error);
    }
})
app.delete("/fixeds",async(req,res)=>{
    try {
        const fixed= await Fixed.findByIdAndDelete(req.params.id,{new:true});
        res.status(200).send({fixed:fixed});
    } catch (error) {
        res.status(500).send(error);
    }
})



  app.listen(5000,async()=>{
   try {
      await connectdb();
       console.log("Listening port 5000")
   } catch (error) {
       console.log(error)
   }

  })