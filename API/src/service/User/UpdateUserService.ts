import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface IUserRequest {
    id: string;   name: string;     email: string; cpf?: string;  admin: boolean;    password: string;
  }  
  class UpdateUserService {
    async execute({ id, name, email, cpf,  admin , password }: IUserRequest) {
      const usersRepository = getCustomRepository(UsersRepositories);
      const userAlreadyExists = await usersRepository.findOne({
        id,
      });
      if (!userAlreadyExists) {
          throw new Error("User not exists")
      }
      const passwordHash = await hash(password, 8)
      userAlreadyExists.name=name
      userAlreadyExists.email=email
      userAlreadyExists.cpf=cpf
      userAlreadyExists.admin=admin
      userAlreadyExists.updated_at=new Date()
      userAlreadyExists.password=passwordHash
      return await usersRepository.update(id,userAlreadyExists)
    }
  }  
  export { UpdateUserService };

