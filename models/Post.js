const mongoose=require('mongoose');

//defining Post Schema
const PostSchema=new mongoose.Schema({
    title:{
        type:'string',
        required:[true,"cant be blank"],
        index:true
    },
    
    description:{
        type:'string',
        required:[true,"can't be blank"],
        
    },
    photo:{
        type:'string',
        required:false,
    },
    username:{
        type:'string',
        required:'true',
        
    },
    categories:{
        type:Array,
        required:true,

    },

   


},{timeseries:true})

const Post=mongoose.model('Post',PostSchema)
module.exports=Post;