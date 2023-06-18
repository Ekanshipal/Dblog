//importing modules using require
const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose')
const dotenv=require("dotenv")

// const userRoutes=require('./routes/userRoutes')
const userRoutes=require('./routes/userRoutes.js')
const authRoutes=require('./routes/auth.js')
dotenv.config()

mongoose.connect(process.env.MONGOURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{console.log("connected to mongodb")}).catch((e)=>{console.log(e)});

app.use(cors());
// app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}))
// app.use('/users',userRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/user',userRoutes);
//server is listening
app.listen(5000,()=>{
    console.log("Listening at 5000");
});
