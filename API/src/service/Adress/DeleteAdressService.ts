import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";
interface IAdressDelete {
    id: string;
}
class DeleteAdressService {
  async execute({id}:IAdressDelete) {
      const adressesRepositories = getCustomRepository(CategoriesRepositories);
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
