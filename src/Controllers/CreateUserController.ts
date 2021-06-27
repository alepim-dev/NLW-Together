import { Request, Response } from "express"
import { CreatUserService } from "../services/CreateUserService";

class CreateUserController{
async handle(request: Request, response:Response){
    const {name, email,admin,password} = request.body;
   const  createUserService = new CreatUserService() ;

    const user = await createUserService.execute({name,email,admin,password});
    return response.json(user);
}
}
export {CreateUserController}