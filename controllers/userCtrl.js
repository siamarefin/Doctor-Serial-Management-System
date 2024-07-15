const userModel = require('../models/userModels')
const bcrypt = require('bcryptjs')


// register callback 
const registerController  = async(req,res) => {
    try{
        const existingUser = await userModel.findOne({email:req.body.email})
        if(existingUser){
            return res.status(200).send({message:'User Already Exist', success:false })
        }
    } catch(error){
        console.log(error)
        res.status(500).send({success:false,message:`Register controller ${error.mass
            }`})
    }
};



const loginController = () => {}


module.exports = {loginController , registerController};