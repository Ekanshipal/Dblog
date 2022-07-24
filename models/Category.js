const mongoose=require('mongoose');

//defining Category Schema
const CategorySchema=new mongoose.Schema({
    name:{
        type:'string',
        required:[true,"cant be blank"],
        
    },
    
},{timeseries:true})

const Category=mongoose.model('Category',CategorySchema)
module.exports=Category;