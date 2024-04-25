import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";
interface ICategoryDelete {
    id: string;
}
class DeleteCategoryService {
  async execute({id}:ICategoryDelete) {
      const categoriesRepositories = getCustomRepository(CategoriesRepositories);
      const categoryAlreadyExists = await categoriesRepositories.findOne({
        id,
      });

      if (!categoryAlreadyExists) {
          throw new Error("Category not exists");
      }
      return await categoriesRepositories.delete(id);           
  }
}
export { DeleteCategoryService };