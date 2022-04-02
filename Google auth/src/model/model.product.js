const { default: mongoose } = require("mongoose");



const  productSchema=new mongoose.Schema({
    title:{type:String,require:true},
    price:{type:Number,require:true},
    user_Id:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true}

},{
    versionKey:false,
    timestamps:true
})
const Product=mongoose.model('product',productSchema);
module.exports=Product;