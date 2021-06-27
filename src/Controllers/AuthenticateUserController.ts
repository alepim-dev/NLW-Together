import { Request, Response } from "express";
import { AutenticateUserService } from "../AutenticateUserService";

class AuthenticateUserController{
    
    async handle(request:Request, response:Response) {
        const {email, password} = request.body

        const autheticateUserService = new AutenticateUserService();
        const token = await autheticateUserService.execute({
            email, password
        });
        return response.json(token)
    }

}
export{AuthenticateUserController};