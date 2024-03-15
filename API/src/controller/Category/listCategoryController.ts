import { Request, Response } from "express";
import { ListCategoryService } from "../../service/Category/ListCategoryService";

class ListCategoryController {
    async handle(request: Request, response: Response) {
        console.log('Listando categorias');
        const listCategoryService = new ListCategoryService();
        await listCategoryService.execute();
        return response.json({message: 'Listando categorias'});
    };
}

export { ListCategoryController };