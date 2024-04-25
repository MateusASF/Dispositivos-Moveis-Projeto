import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { Adress } from "../../entities/Adress";
interface IUserRequest {   name: string;
  email: string; cpf?: string;   admin?: boolean;  password: string; adress: Adress }
class CreateUserService {
  async execute({ name, email, cpf, admin = false, password, adress }: IUserRequest) {
    if (!email) {
      throw new Error("Email incorreto");
    }
    const usersRepository = getCustomRepository(UsersRepositories);
    // const userAlreadyExists = await usersRepository.findOne({
    //   email,
    // });
    // if (userAlreadyExists) {
    //   throw new Error("User already exists");
    // }
    const passwordHash = await hash(password, 8);
    const user = usersRepository.create({  name, email, cpf, admin, password: passwordHash, adress  });
    await usersRepository.save(user);
    return user;
  }
}
export { CreateUserService };
