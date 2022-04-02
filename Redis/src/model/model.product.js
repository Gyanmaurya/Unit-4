

const mongoose=require('mongoose');

const productSchema= new mongoose.Schema({
    name:{type:String,require:true},
    brand:{type:String, require:true},
    categary:{type:String,require:true}
},{
    versionKey:false,
    timestamps:true
})
const Product=mongoose.model("product",productSchema);
module.exports=Product;