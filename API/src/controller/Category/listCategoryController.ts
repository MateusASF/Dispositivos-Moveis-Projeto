import { Request, Response } from "express";
import { ListCategoryService } from "../../service/Category/ListCategoryService";


class ListCategoryController {
    async handle(request: Request, response: Response) {
        const listcategoryService = new ListCategoryService();
        const categories = await listcategoryService.execute();
        return response.json(categories);
    };
}

export { ListCategoryController };