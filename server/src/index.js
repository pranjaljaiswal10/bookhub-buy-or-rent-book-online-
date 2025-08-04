import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser"
import connectDB from "./db/index.js";
import authRouter from "./routes/auth.route.js"
import bookRouter from "./routes/book.route.js"
import paymentRouter from "./routes/payment.route.js"

dotenv.config({
  path: "./.env",
});

const app = express();
const morganFormat = ":method :url :status :response-time ms";

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(morgan(morganFormat));
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/api/v1/users",authRouter)
app.use("/api/v1/books",bookRouter)

app.use((req,res,error,next)=>{
  console.log(error.stack)
  const statusCode=error.statusCode|| 500;
  const message=error.message|| "Internal server error"
  res.status(statusCode).json({error:message,success:false})
})


const port = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`server running on port:${port}`);
    });
  })
  .catch((err) => {
    console.log(`MONGODB connection FAILED! ${err}`);
  });
