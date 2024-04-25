import { Category } from "../../entities/Category";
import { ProductsRepositories } from "../../repositories/ProductsRepositories";
import { getCustomRepository } from "typeorm";

interface IProductRequest {
  id: string;
  name: string;
  price: number;
  description: string;
  category: Category;
  }

  class UpdateProductService {
    async execute({ id,name, price, description, category }: IProductRequest) {
      const productsRepository = getCustomRepository(ProductsRepositories);
      const productAlreadyExists = await productsRepository.findOne({
        id
      });
      if (!productAlreadyExists) {
          throw new Error("User not exists")
      }
      productAlreadyExists.name = name;
      productAlreadyExists.price = price;
      productAlreadyExists.description = description;
      productAlreadyExists.category = category;
      productAlreadyExists.updated_at = new Date();
      return await productsRepository.update(id,productAlreadyExists)
    }
  }
  export { UpdateProductService };
  