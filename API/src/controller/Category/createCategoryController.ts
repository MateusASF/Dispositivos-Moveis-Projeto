import { Request, Response } from "express";

class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const { name, id } = request.body;
        console.log("Nome: " + name);
        console.log("Id: " + id);
        const category = {
            name,
            id
        };
        return response.json(category);
    };
}

export { CreateCategoryController };
