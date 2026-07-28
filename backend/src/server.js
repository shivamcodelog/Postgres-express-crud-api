import express from "express";
import dotenv from "dotenv"
import cors from "cors"

dotenv.config();

const port = process.env.PORT || 5001 ;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.get("/",(req,res)=>{
    res.send("hello universe")
    console.log("hello universe")
})

app.listen(port, ()=>{
    console.log(`server is running on PORT:${port}`)
})