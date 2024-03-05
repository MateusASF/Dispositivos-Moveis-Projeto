import { Request, Response } from "express";


class ListUserController {
    async handle(request: Request, response: Response) {

        return response.json({message: 'Listando usuários'});
    };
}

export { ListUserController };