import { Request, Response } from "express";
import { DeleteProductService } from "../../service/Product/DeleteProductService";

class DeleteProductController {
    async handle(request: Request, response: Response) {
        const { id } = request.body;
        console.log("ID: " + id);
        const deleteProductService = new DeleteProductService();
        await deleteProductService.execute({id});
        return response.json({message: 'Deletando produto'});
    };
}

export { DeleteProductController };