const { type } = require('express/lib/response')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String ,
        required:[true , 'name is require ']
    },
    email:{
        type:String ,
        required :[true , 'Email is required ']
    },
    password:{
        type:String,
        required:[true , 'password is require ']
    },

});


const  userModel = mongoose.model('users',userSchema)

module.expors  = userModel