import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface IAuthenticateRequest {
    email: string;
    password: string;
}
class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {  
        const usersRepositories = getCustomRepository(UsersRepositories);
        const user = await usersRepositories.findOne({        email,    });
        if(!user){
            throw new Error("Email incorreto");
        }

        const passwordMatch = await compare(password, user?.password);
        if (!passwordMatch) {
          throw new Error("Password incorrect");
        }

        const token = sign(
          {         email:user.email,  },
          "123456",
          { subject: (user.admin?"Admin":"others"), expiresIn: "1d", }
        );    
        return token;
      }
}
export { AuthenticateUserService };
