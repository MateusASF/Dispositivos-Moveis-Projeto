import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";
import { getCustomRepository } from "typeorm";

interface ICategoryRequest {
    name: string;
}

class CreateCategoryService {
    async execute({ name }: ICategoryRequest) {
        const categoriesRepository = getCustomRepository(CategoriesRepositories);
        const categoryAlreadyExists = await categoriesRepository.findOne({
            name,
        });
        if (categoryAlreadyExists) {
          throw new Error("User already exists");
        }
        const category = categoriesRepository.create({ name });
        await categoriesRepository.save(category);
        return category;
      }
}

export { CreateCategoryService };