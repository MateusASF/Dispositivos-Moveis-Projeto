import { Request, Response } from "express";
import { DeleteOrderService } from "../../service/Orders/DeleteOrderService";

class DeleteOrderController {
    async handle(request: Request, response: Response) {
        const { id } = request.body;
        console.log("ID: " + id);
        const deleteOrderService = new DeleteOrderService();
        await deleteOrderService.execute({id});
        return response.json({message: 'Deletando categoria'});
    };
}

export { DeleteOrderController };
