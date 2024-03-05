import { Request, Response } from "express";

class DeleteProductController {
    async handle(request: Request, response: Response) {
        const { id } = request.body;
        console.log("ID: " + id);
        return response.json({message: 'Deletando produto'});
    };
}

export { DeleteProductController };