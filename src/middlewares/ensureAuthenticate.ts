import { Request,Response,NextFunction } from "express";
import { verify } from "jsonwebtoken";
export function ensureAuthenticate(request: Request,response: Response,next: NextFunction){

interface IPayload{
    sub: string;
}

const authToken= request.headers.authorization;

if(!authToken){
    return response.status(401).end();
}


const[ ,token]= authToken.split(" ")

try{
  const { sub }= verify(token,"4f93ac9d10cb751b8c9646bc9dbccb9") as IPayload;
  request.user_id = sub;
  return next();
}catch(err){
    return response.status(401).end();
}

    

    

}