import { Request, Response } from "express";

class ListUserController {
    async handle(request: Request, response: Response) {
        console.log('Listando usuários');
        return response.json({message: 'Listando usuários'});
    };
}

export { ListUserController };