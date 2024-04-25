import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";

interface IAdressRequest {
    id:string;
    name: string;
  }
  class UpdateAdressService {

    async execute({ id, name }: IAdressRequest) {
      const adressesRepository = getCustomRepository(CategoriesRepositories);
      const adressAlreadyExists = await adressesRepository.findOne({
        id,
      });
      if (!adressAlreadyExists) {
          throw new Error("User not exists")
      }
      adressAlreadyExists.name=name
      adressAlreadyExists.updated_at=new Date()
      return await adressesRepository.update(id,adressAlreadyExists)
    }

  }
  export { UpdateAdressService };
  