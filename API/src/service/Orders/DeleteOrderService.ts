import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";
interface IOrderDelete {
    id: string;
}
class DeleteOrderService {
  async execute({id}:IOrderDelete) {
      const categoriesRepositories = getCustomRepository(CategoriesRepositories);
      const categoryAlreadyExists = await categoriesRepositories.findOne({
        id,
      });

      if (!categoryAlreadyExists) {
          throw new Error("Order not exists");
      }
      return await categoriesRepositories.delete(id);           
  }
}
export { DeleteOrderService };
