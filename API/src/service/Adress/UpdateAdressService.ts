import { getCustomRepository } from "typeorm";
import { AdressRepositories } from "../../repositories/AdressRepositories";
import { User } from "../../entities/User";

interface IAdressRequest {
  id: string; bairro: string; cidade: string; estado: string; 
  }
  class UpdateAdressService {

    async execute({ id, bairro, cidade, estado  }: IAdressRequest) {
      const adressesRepository = getCustomRepository(AdressRepositories);
      const adressAlreadyExists = await adressesRepository.findOne({
        id
      });
      if (!adressAlreadyExists) {
          throw new Error("adress not exists")
      }
      adressAlreadyExists.bairro = bairro;
      adressAlreadyExists.cidade = cidade;
      adressAlreadyExists.estado = estado;

      adressAlreadyExists.updated_at=new Date()
      return await adressesRepository.update(id,adressAlreadyExists)
    }

  }
  export { UpdateAdressService };
  