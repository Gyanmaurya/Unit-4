 const express=require('express');
 const mongoose=require('mongoose');
const { use } = require('../Day5/src/controller/comment.controller');
const { createIndexes } = require('../Day5/src/model/model.comment');

 const app=express();
 app.use(express.json());
  const connectdb=()=>{
    return  mongoose.connect('mongodb://127.0.0.1:27017/Books')
  }
 

// user schema Creation 
const userSchema=new mongoose.Schema({
  firstName:{type:String,require:true},
  lastName:{type:String,require:true},
  age:{type:Number,require:true}
},{
  timestamps:true,
  versionKey:false
})

const User=mongoose.model("user",userSchema)

app.get("/users",async(req,res)=>{
try {
  const user=await User.find({}).lean().exec();
  res.status(200).send({user:user})
  return res.send(user)
} catch (error) {
  res.status(500).send(error);
  console.log(error)
}
})
app.post("/users",async(req,res)=>{
try {
  const user=await User.create(req.body);
  res.status(200).send({user:user})
  return res.send(user)
} catch (error) {
  res.status(500).send(error);
  console.log(error)
}
})
app.get("/users/:id",async(req,res)=>{
  try {
    const user=await User.findById(req.params.id);
    return res.send(user)
  } catch (error) {
    res.status(500).send(error);
    console.log(error)
  }
})
app.patch("/users/:id",async()=>{
  try {
    const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
    return res.send(user)
  } catch (error) {
    console.log(error);
    res.send(error)
  }
})
app.patch("/users/:id",async()=>{
  try {
    const user=await User.findByIdAndDelete(req.params.id).lean().exec()
    return res.send(user)
  } catch (error) {
    console.log(error);
    res.send(error)
  }
})


// section schema
const sectionSchema=new mongoose.Schema({
  categoryName:{type:String, require:true}
},{
  versionKey:false,
  timestamps:true
})
const Section=mongoose.model("section",sectionSchema);
 
//section crud

app.get("/sections",async(req,res)=>{
   try {
     const section=await Section.find({}).lean().exec();
     return res.send(section)
   } catch (error) {
     console.log(error);
     return res.send(error)
   }

})
app.post("/sections",async(req,res)=>{
  try {
    const section=await Section.create(req.body);
    res.status(200).send({section:section})
    return res.send(section)
  } catch (error) {
    res.status(500).send(error);
    console.log(error)
  }
  })
  app.get("/sections/:id",async(req,res)=>{
    try {
      const section=await Section.findById(req.params.id);
      return res.send(section)
    } catch (error) {
      res.status(500).send(error);
      console.log(error)
    }
  })


   // books Schema
   const booksSchema=new mongoose.Schema({
    name:{type:String,require:true},
    body:{type:String,require:true},
    sectionId:{type:mongoose.Schema.Types.ObjectId,ref:"section",require:true}

   },{
     versionKey:false,
     timestamps:true
   })
 
   const Book=mongoose.model("books",booksSchema)
   app.get("/books",async(req,res)=>{
    try {
      const book=await Book.find({}).populate({path:"sectionId",select:{_id:0}}).lean().exec();
      return res.send(book)
    } catch (error) {
      console.log(error);
      return res.send(error)
    }
   })
   app.post("/books",async(req,res)=>{
    try {
      const book=await Book.create(req.body);
      res.status(200).send({book:book})
      return res.send(book)
    } catch (error) {
      res.status(500).send(error);
      console.log(error)
    }
    })
    app.get("/books/:id",async(req,res)=>{
      try {
        const book=await Book.findById(req.params.id);
        return res.send(book)
      } catch (error) {
        res.status(500).send(error);
        console.log(error)
      }
    })


//author schema 
const authorSchema=new mongoose.Schema({
   body:{type:String},
   userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true}
},{
  versionKey:false,
  timestamps:true
})
const Author=mongoose.model("authors",authorSchema);

app.get("/authors",async(req,res)=>{
  try {
    const author=await Author.find({}).lean().exec();
    return res.status(200).send(author)
  } catch (error) {
    console.log(error)
  }
     
})
app.post("/authors",async(req,res)=>{
  try {
    const author=await Author.create(req.body);
    res.status(200).send({author:author})
    return res.send(author)
  } catch (error) {
    res.status(500).send(error);
    console.log(error)
  }
  })
  app.get("/authors/:id",async(req,res)=>{
    try {
      const author=await Author.findById(req.params.id);
      return res.send(author)
    } catch (error) {
      res.status(500).send(error);
      console.log(error)
    }
  })

// books author schema

const book_authorSchema=new mongoose.Schema({
    authorId:{type:mongoose.Schema.Types.ObjectId,ref:"authors",require:true},
    bookId:{type:mongoose.Schema.Types.ObjectId,ref:"books",require:true}
},{
  versionKey:false,
  timestamps:true
});

const Author_book=mongoose.model("authorbooks",book_authorSchema);

app.get("/bookauthor",async(req,res)=>{
  try {
    const author_book=await Author_book.find({}).populate({path:"authorId"}).polygon({path:"bookId"}).lean().exec();
   return res.send(author_book);
  } catch (error) {
    console.log(error);
   return res.send(error)
  }
});
app.post("/bookauthor",async(req,res)=>{
  try {
    const author_book=await Author_book.create(req.body);
    res.status(200).send({author_book:author_book})
    return res.send(author_book)
  } catch (error) {
    res.status(500).send(error);
    console.log(error)
  }
  })
  app.get("/bookauthor/:id",async(req,res)=>{
    try {
      const author_book=await Author_book.findById(req.params.id);
      return res.send(author_book)
    } catch (error) {
      res.status(500).send(error);
      console.log(error)
    }
  })

// check out Schema 
const checkoutSchema=new mongoose.Schema({
   userId:{},
   booksId:{},
   check_out:{},
   check_in:{}

},{
  versionKey:false,
  timestamps:true
})
const Checkout=mongoose.model("checkouts",checkoutSchema)

    

 app.listen(5000,async()=>{
try {
    await connectdb();
    console.log("Listening Port 5000")
} catch (error) {
    console.log("Error:",error)
}
    
 })