import { Request, Response } from "express";
import { CreateOrderService } from "../../service/Orders/CreateOrderService";

class CreateOrderController {
    async handle(request: Request, response: Response) {
        const { userId, productId, quantity, total, discount} = request.body;
        const createOrderService = new CreateOrderService();
        const order =  await createOrderService.execute({
            userId, productId, quantity, total, discount
        });
        return response.json(order);

    };
}

export { CreateOrderController };
