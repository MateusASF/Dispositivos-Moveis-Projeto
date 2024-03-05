import { Request, Response } from "express";

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
        return response.json(product);
    };
}

export { UpdateProductController };