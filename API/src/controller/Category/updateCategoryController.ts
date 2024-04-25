import { Request, Response } from "express";
import { UpdateCategoryService } from "../../service/Category/UpdateCategoryService";

class UpdateCategoryController {
    async handle(request: Request, response: Response) {
        const { name, id } = request.body;
        const category = {
            name,
            id
        };
        const updateCategoryService = new UpdateCategoryService();
        await updateCategoryService.execute(category);
        return response.json(category);
    };
}

export { UpdateCategoryController };