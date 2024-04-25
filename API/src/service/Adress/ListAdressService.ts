import { getCustomRepository } from "typeorm";
import { AdressRepositories } from "../../repositories/AdressRepositories";

class ListAdressService {
  async execute() {
    const adressesRepositories = getCustomRepository(AdressRepositories);

    const adresses = await adressesRepositories.find();

    return adresses;
  }
}

export { ListAdressService };

