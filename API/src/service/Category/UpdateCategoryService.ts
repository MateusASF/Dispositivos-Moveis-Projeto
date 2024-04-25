import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";

interface ICategoryRequest {
    id:string;
    name: string;
  }
  class UpdateCategoryService {

    async execute({ id, name }: ICategoryRequest) {
      const categoriesRepository = getCustomRepository(CategoriesRepositories);
      const categoryAlreadyExists = await categoriesRepository.findOne({
        id,
      });
      if (!categoryAlreadyExists) {
          throw new Error("Category not exists")
      }
      categoryAlreadyExists.name=name
      categoryAlreadyExists.updated_at=new Date()
      return await categoriesRepository.update(id,categoryAlreadyExists)
    }

  }
  export { UpdateCategoryService };
  