import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";

interface IOrderRequest {
    name: string;
}

class CreateOrderService {
    async execute({ name }: IOrderRequest) {
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

export { CreateOrderService };
