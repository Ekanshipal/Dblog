const router=require("epxress").router;

//importing users and post
const User=require("../models/User.js");
const Post=require("../models/Post.js");


//Create a new post

router.post("")

//Update a post
router.put(":/id",async(req,res)=>{
    if(req.body.user.id==req.params.id)
    {
        try{
        const post=await Post.findByIdAndUpdate(req.params.id,
            {
                $set:req.body,

            },{new:true}
        );
        }
        catch(err){
            res.status(404).json("Cannot be Updated");

        }


    }
    else{
        res.status(500).json("You can update only your post");
    }

});

