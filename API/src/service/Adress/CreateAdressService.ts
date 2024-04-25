import { getCustomRepository } from "typeorm";
import { AdressRepositories } from "../../repositories/AdressRepositories";
import { User } from "../../entities/User";

interface IAdressRequest {
    bairro: string; cidade: string; estado: string; user: User;
}

class CreateAdressService {
    async execute({ bairro, cidade, estado, user }: IAdressRequest) {
        const adressesRepository = getCustomRepository(AdressRepositories);
        const adress = adressesRepository.create({ bairro, cidade, estado, user });
        await adressesRepository.save(adress);
        return adress;
      }
}

export { CreateAdressService };
