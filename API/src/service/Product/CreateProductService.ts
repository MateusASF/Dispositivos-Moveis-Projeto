import { Category } from "../../entities/Category";
import { ProductsRepositories } from "../../repositories/ProductsRepositories";
import { getCustomRepository } from "typeorm";
interface CreateProductDTO {
    name: string;
    price: number;
    description: string;
    category: Category;
}

class CreateProductService {
    async execute({ name, price, description, category}: CreateProductDTO) {
        const productsRepository = getCustomRepository(ProductsRepositories);
        const productAlreadyExists = await productsRepository.findOne({
            name
        });
        if (productAlreadyExists) {
          throw new Error("Product already exists");
        }
        const product = productsRepository.create({ name, price, description, category});
        await productsRepository.save(product);
        return product;
    }
}

export { CreateProductService };
