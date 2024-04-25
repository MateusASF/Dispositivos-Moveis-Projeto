import { getCustomRepository } from "typeorm";
import { AdressRepositories } from "../../repositories/AdressRepositories";

interface IAdressRequest {
    bairro: string; cidade: string; estado: string;
}

class CreateAdressService {
    async execute({ bairro, cidade, estado }: IAdressRequest) {
        const adressesRepository = getCustomRepository(AdressRepositories);
        const adress = adressesRepository.create({ bairro, cidade, estado });
        await adressesRepository.save(adress);
        return adress;
      }
}

export { CreateAdressService };
