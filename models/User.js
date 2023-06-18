const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//defining UserSchema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        index: true
    },

    password: {
        type: String,
        required: true,

    },

    createdAt: {
        type: Date,
        default: Date.now
    }
}
)

// UserSchema.pre('save',function(next)
// {
//     const user=this;
//     //if password is not changed then pass to through the middleware
//     if(!user.isModified(password))return next();
//     //if new user registers

// bcrypt.genSalt(10, function(err,salt){
//         if(err) return next(err);

//         bcrypt.hash(user.password,salt,function(err,hash){
//             if(err) return next(err);
//             user.password=hash;
//             next();

//         })
// })

// })

// UserSchema.methods.generateAuthtoken=async()=>{
//     const user=this;
//     const token=jwt.sign({_id:user._id.toString()},'appSecret');
//     user.tokens.concat(token);
//     await user.save();
//     return ;


// }

//defining user
const User = mongoose.model('User', UserSchema);

//exporting the model 'user'
module.exports = User;