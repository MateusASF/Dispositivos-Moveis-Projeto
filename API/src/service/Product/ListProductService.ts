import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../../repositories/ProductsRepositories";

class ListProductService {
  async execute() {
    const productssRepositories = getCustomRepository(ProductsRepositories);

    const products = await productssRepositories.find({
      relations: ["category"]
      // loadRelationIds: true
    });

    return products;
  }
}

export { ListProductService };

