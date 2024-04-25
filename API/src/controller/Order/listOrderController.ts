import { Request, Response } from "express";
import { ListOrderService } from "../../service/Orders/ListOrderService";


class ListOrderController {
    async handle(request: Request, response: Response) {
        const listorderService = new ListOrderService();
        const orders = await listorderService.execute();
        return response.json(orders);
    };
}

export { ListOrderController };
