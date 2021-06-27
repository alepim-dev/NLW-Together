import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UserRepositories } from "../repositories/UsersRepositories";


interface IComplimentRequest{
    tag_id:string;
    user_sender:string;
    user_receiver:string;
    message: string;
}

class CreateComplimentService{
    async execute({tag_id, user_receiver , user_sender, message}: IComplimentRequest){
        const complimentsRepositories= getCustomRepository(ComplimentsRepositories);
        const usersRepository = getCustomRepository(UserRepositories);

        if(user_sender === user_receiver){
            throw new Error("users must be diferent!");
        }

        const userReceiverExists= await usersRepository.findOne(
            user_receiver );

        if(!userReceiverExists){
            throw new Error ("User receiver does not exists!");

        }
    
        const compliments =  complimentsRepositories.create(
            {user_receiver,user_sender,tag_id,message}
        );
        await complimentsRepositories.save(compliments);
        }

}
export{CreateComplimentService}