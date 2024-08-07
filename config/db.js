const mongoose  = require('mongoose')
const colors  = require('colors') 


const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Mongodb connect ${mongoose.connection.host}`.bgGreen.white);
    } catch(error){
        console.log(`MOngoDB server issues ${error}`.bgRed.white);
    }
};

module.exports = connectDB; 