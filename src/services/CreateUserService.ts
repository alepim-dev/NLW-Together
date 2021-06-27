import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UsersRepositories";
import{hash} from"bcryptjs";
interface IUserRequest{
    name:string;
    email:string;
    password:string;
    admin?: boolean;
}


class CreatUserService{

    async execute({name,email,admin=false,password}:IUserRequest){
        const usersRepository = getCustomRepository(UserRepositories);

         if(!email) {
             throw new Error ("Email incorrect");
         }  

        const userAlreadyExists = await usersRepository.findOne({
            email,
        });

        if(userAlreadyExists){
            throw new Error("User alrady exists");
        }
        const passwordhash = await hash(password,8);

        const user= usersRepository.create(
            {name,email,admin,password:passwordhash}
        );
        await usersRepository.save(user);

        return user;
    }
}

export {CreatUserService};
