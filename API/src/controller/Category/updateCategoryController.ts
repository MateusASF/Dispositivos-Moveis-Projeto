import e, { Request, Response } from "express";

class UpdateCategoryController {
    async handle(request: Request, response: Response) {
        const { name, description } = request.body;
        console.log("Nome: " + name);
        console.log("Descrição: " + description);
        const category = {
            name,
            description
        };
        return response.json(category);
    };
}

export { UpdateCategoryController };