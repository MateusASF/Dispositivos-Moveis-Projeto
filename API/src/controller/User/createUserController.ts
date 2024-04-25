import { Request, Response } from "express";
import { CreateUserService } from "../../service/User/CreateUserService";
// import fs from "fs";
class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, cpf, admin, password, adress } = request.body;
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({
            name,
            email,
            cpf,
            admin,
            password,
            adress
        });
        return response.json(user);
    };
}

export { CreateUserController };
