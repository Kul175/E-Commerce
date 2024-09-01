import express from 'express';
import mongoose from 'mongoose';
 import bodyParser from 'express'   //to run req.body 
import userRouter from './Routes/user.js';
import productRouter from './Routes/product.js';
import cartRouter from './Routes/cart.js';
import addressRouter from './Routes/address.js';
import paymentRouter from './Routes/payment.js';
import cors from 'cors';


const app= express();

app.use(bodyParser.json())  //to run req.body 

app.use(cors({
    origin:true,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))


// home testing route
app.get('/',(req,res)=>res.json({messge:'This is home route'}))

// user Router
app.use('/api/user',userRouter)

// product Router
app.use('/api/product',productRouter)

// // cart Router
app.use('/api/cart',cartRouter)

// address Router
app.use ('/api/address',addressRouter)

// payment router 
app.use ('/api/payment',paymentRouter)


mongoose.connect(
    "mongodb+srv://patidarkuldeep175:7QaCp5sHB0LI4MHM@cluster0.ie6jogp.mongodb.net/",{
        dbName:"MERN-E-COMMERCE"
    }

).then(()=>console.log("Mongo db connected successfully...?")).catch((err)=>console.log(err));




const port = 3001 ;
app.listen(port,()=>console.log(`server is running on port ${port}`))
