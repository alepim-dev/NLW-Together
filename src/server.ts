import "reflect-metadata";
import express, {Response , Request, NextFunction}from 'express';
import { router } from "./routes";
import "./database";
import"express-async-errors";



const app = express();
app.use(express.json());
app.use(router);

app.use((err: Error,request:Request, response: Response, next: NextFunction)=>{
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message
        })
    }
    return response.status(500).json({
        status:"error",
        messsage:"Internal server Error"
    })
})

app.listen(3000,() => console.log("server is running"));