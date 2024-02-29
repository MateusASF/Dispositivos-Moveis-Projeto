import { Request, Response } from "express";

class DeleteCategoryController {
    async handle(request: Request, response: Response) {
        const { id } = request.body;
        console.log("ID: " + id);
        return response.json({message: 'Deletando categoria'});
    };
}

export { DeleteCategoryController };