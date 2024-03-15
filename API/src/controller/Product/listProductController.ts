import { Request, Response } from "express";
import { ListProductService } from "../../service/Product/ListProductService";


class ListProductController {
    async handle(request: Request, response: Response) {
        const listProductService = new ListProductService();
        await listProductService.execute();
        return response.json({message: 'Listando produtos'});
    };
}

export { ListProductController };