import mongoose, { mongo } from 'mongoose'

export const connectdb=async ()=>{
    await mongoose.connect('mongodb+srv://Yashi2305:merapehlaproject@cluster0.xqaw4.mongodb.net/FoodDelivery').then(()=>console.log("db connected"));
}