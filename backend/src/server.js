import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import pool from "./config/db.js";
import { errorHandling } from "./middlewares/error.middleware.js"

dotenv.config();

const port = process.env.PORT || 5001 ;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())

//Routes 


// Error handling
app.use(errorHandling)

// Testing Postgre connnection
app.get("/",async(req,res)=>{
    try {
        const result = await pool.query("SELECT current_database()")
        console.log("end")

        res.send(`Database name:${result.rows[0].current_database}`)

        console.log(result)
    } catch (error) {
        console.error(error)
        res.status(500).send("Failed to read database name")
    }
})



// Testing the server

app.listen(port, ()=>{
    console.log(`server is running on PORT:${port}`)
})