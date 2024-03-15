import { Request, Response } from "express";
import { UpdateProductService } from "../../service/Product/UpdateProductService";

class UpdateProductController {
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
        const updateProductService = new UpdateProductService();
        await updateProductService.execute(product);
        return response.json(product);
    };
}

export { UpdateProductController };