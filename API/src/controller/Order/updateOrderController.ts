import { Request, Response } from "express";
import { UpdateOrderService } from "../../service/Orders/UpdateOrderService";

class UpdateOrderController {
    async handle(request: Request, response: Response) {
        const { id, userId, productId, quantity, total, discount } = request.body;
        const order = {
            id, userId, productId, quantity, total, discount
        };
        const updateOrderService = new UpdateOrderService();
        await updateOrderService.execute(order);
        return response.json(order);
    };
}

export { UpdateOrderController };
