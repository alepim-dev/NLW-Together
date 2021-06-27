import{ Request,Response} from"express";
import { getCustomRepository } from "typeorm";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

class ListUserReceiveComplimentsController{

    async handle(request:Request,response:Response){

            const {user_id} = request;
            const listUserReceiveComplimentsService= getCustomRepository(ListUserReceiveComplimentsService);
            const compliments = await listUserReceiveComplimentsService.execute(user_id);
            return response.json(compliments);
    }
}
export{ListUserReceiveComplimentsController}