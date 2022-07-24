const router=require('express').Router();
const User=require('../models/User.js');

//Registering new User

router.post('/register',async(req,res)=>{
    
    try{
    const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,

    });
    
    // await newUser.generateAuthtoken();
    const user=await newUser.save();
    res.status(200).json(user)
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

//login user


module.exports=router;