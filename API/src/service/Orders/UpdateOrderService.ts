import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";

interface IOrderRequest {
    id:string;
    name: string;
  }
  class UpdateOrderService {

    async execute({ id, name }: IOrderRequest) {
      const categoriesRepository = getCustomRepository(CategoriesRepositories);
      const categoryAlreadyExists = await categoriesRepository.findOne({
        id,
      });
      if (!categoryAlreadyExists) {
          throw new Error("User not exists")
      }
      categoryAlreadyExists.name=name
      categoryAlreadyExists.updated_at=new Date()
      return await categoriesRepository.update(id,categoryAlreadyExists)
    }

  }
  export { UpdateOrderService };
  