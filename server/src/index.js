import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"
import helmet from "helmet"

dotenv.config({
    path:"./.env"
})

const app=express()
const morganFormat=""


app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(morgan(morganFormat))
app.use(helmet())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port=process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`server running on port:${port}`)
})

