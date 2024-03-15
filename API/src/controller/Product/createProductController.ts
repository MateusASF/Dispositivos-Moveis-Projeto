import { Request, Response } from "express";
import { CreateProductService } from "../../service/Product/CreateProductService";

class CreateProductController {
    async handle(request: Request, response: Response) {
        const { id, name, price, description, category } = request.body;
        console.log("Id: " + id);
        console.log("Nome: " + name);
        console.log("Preço: " + price);
        console.log("Descrição: " + description);
        console.log("Categoria: " + category);
        const product = {
            id,
            name,
            price,
            description,
            category
        };
        const createProductService = new CreateProductService();
        await createProductService.execute(product);
        return response.json(product);
    };
}

export { CreateProductController };
