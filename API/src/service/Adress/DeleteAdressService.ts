import { getCustomRepository } from "typeorm";
import { AdressRepositories } from "../../repositories/AdressRepositories";
interface IAdressDelete {
    id: string;
}
class DeleteAdressService {
  async execute({id}:IAdressDelete) {
      const adressesRepositories = getCustomRepository(AdressRepositories);
      const adressAlreadyExists = await adressesRepositories.findOne({
        id,
      });

      if (!adressAlreadyExists) {
          throw new Error("Adress not exists");
      }
      return await adressesRepositories.delete(id);           
  }
}
export { DeleteAdressService };
