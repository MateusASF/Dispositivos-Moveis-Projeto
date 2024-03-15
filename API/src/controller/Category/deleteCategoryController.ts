import { Request, Response } from "express";
import { DeleteCategoryService } from "../../service/Category/DeleteCategoryService";

class DeleteCategoryController {
    async handle(request: Request, response: Response) {
        const { id } = request.body;
        console.log("ID: " + id);
        const deleteCategoryService = new DeleteCategoryService();
        await deleteCategoryService.execute({id});
        return response.json({message: 'Deletando categoria'});
    };
}

export { DeleteCategoryController };