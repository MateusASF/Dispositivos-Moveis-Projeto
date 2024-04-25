import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../../repositories/ProductsRepositories";
interface IProductDelete {
    id: string;
}
class DeleteProductService {
  async execute({id}:IProductDelete) {
      const productssRepositories = getCustomRepository(ProductsRepositories);
      const productAlreadyExists = await productssRepositories.findOne({
        id,
      });

      if (!productAlreadyExists) {
          throw new Error("Product not exists");
      }
      return await productssRepositories.delete(id);           
  }
}
export { DeleteProductService };