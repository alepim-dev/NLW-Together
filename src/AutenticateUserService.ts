import { getCustomRepository } from "typeorm"
import { UserRepositories } from "./repositories/UsersRepositories"
import{compare} from "bcryptjs"
import { sign } from "jsonwebtoken";
interface IAuthenticateRequest{
    email:string;
    password:string;
}

class AutenticateUserService{
    async execute({email, password}: IAuthenticateRequest){
        const usersRepository = getCustomRepository(UserRepositories)
        const user = await usersRepository.findOne({email});

        if(!user){
            throw new Error("email/password incorrect");
        }

        const passwordMatch = compare(password, user.password);
        if(!passwordMatch) {
            throw new Error("email/password incorrect");
        }
        const token = sign(
            {
                email: user.email,
            },
            "4f93ac9d10cb751b8c9646bc9dbccb9",
            {
                subject: user.id,
                expiresIn: "1d",
            }
        );
        return token;
    }
}
export {AutenticateUserService}