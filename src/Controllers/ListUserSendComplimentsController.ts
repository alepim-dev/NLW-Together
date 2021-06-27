import{ Request,Response} from"express";
import { getCustomRepository } from "typeorm";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserSendComplimentsController{

    async handle(request:Request,response:Response){
        const {user_id} = request;
        const listUserSendComplimentsService= getCustomRepository(ListUserSendComplimentsService);
        const compliments = await listUserSendComplimentsService.execute(user_id);
        return response.json(compliments);
    }
}
export{ListUserSendComplimentsController}