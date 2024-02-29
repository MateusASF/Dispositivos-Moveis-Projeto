import { Request, Response } from "express";

class ListCategoryController {
    async handle(request: Request, response: Response) {
        console.log('Listando categorias');
        return response.json({message: 'Listando categorias'});
    };
}

export { ListCategoryController };