// siam arefin 
const express  = require('express')
const colors = require('colors')
const moragan = require('morgan')
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// siam arefin 
dotenv.config();

// mongodb connection 
connectDB(); 

const app = express() 

app.use(express.json())
app.use(moragan('dev'))


//routes 
app.use('/api/vi/user',require('./routes/userRoutes'));



const port  = process.env.PORT || 8080

app.listen(port  ,()  => {
    console.log(
        `Server Running  in  ${process.env.NODE_MODE} `
    );
});
