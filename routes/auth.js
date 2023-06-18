const bcrypt=require('bcrypt');
const router=require('express').Router();
const User=require('../models/User.js');

//Registering new User(CREATION)

router.post('/register',async(req,res)=>{
    try{
        //hashing the password using becrypt 
    const salt=await bcrypt.genSalt(10);
    const hashpass=await bcrypt.hash(req.body.password,salt);
    //creating new user with details provided by user
    const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:hashpass,
    });
    //saving new user of posting into database
    const user=await newUser.save();
    return res.status(200).json(user)
    }
    catch(err)
    {
        //if error 500
        return res.status(500).json(err);
    }
})

//user login(LOGIN)

router.post("/login",async(req,res)=>{
    try{

    //finding the given username exists or not
    const user=await User.findOne({username:req.body.username});
    if(!user)
    return res.status(400).json("Wrong Credentials")

    //checking password

    const validate=await bcrypt.compare(req.body.password,user.password);
    if(!validate)
    return res.status(400).json("Wrong Credentials");

    return res.status(200).json("Valid User")
    }catch(err)
    {
        return res.status(500).json(err);
    }
});



module.exports=router;