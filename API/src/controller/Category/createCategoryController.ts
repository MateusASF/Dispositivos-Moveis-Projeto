import { Request, Response } from "express";
import { CreateCategoryService } from "../../service/Category/CreateCategoryService";

class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const { name, id } = request.body;
        console.log("Nome: " + name);
        console.log("Id: " + id);
        const category = {
            name,
            id
        };
        const createCategoryService = new CreateCategoryService();
        await createCategoryService.execute(category);
        return response.json(category);
    };
}

export { CreateCategoryController };
