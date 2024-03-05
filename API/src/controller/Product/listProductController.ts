import { Request, Response } from "express";


class ListProductController {
    async handle(request: Request, response: Response) {

        return response.json({message: 'Listando produtos'});
    };
}

export { ListProductController };