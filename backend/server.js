import express from "express"
import cors from "cors"
import { connectdb } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import "dotenv/config"
import cartRouter from "./routes/cartRoutes.js"
import paymentRouter from './routes/paymentRoute.js';


//app config
const app=express()
const port=4000

//middlewares
app.use(express.json())
app.use(cors())

//db connection
connectdb();

//api endpoints

app.use('/api/food',foodRouter);
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter);
app.use('/api/cart',cartRouter);
app.use('/api/payment', paymentRouter);

app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})
