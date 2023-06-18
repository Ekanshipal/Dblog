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
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    tags:[String],
})[timestamp:true]

const Post=mongoose.model('Post',PostSchema)
module.exports=Post;