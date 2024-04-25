import { Request, Response } from "express";
import { UpdateUserService } from "../../service/User/UpdateUserService";

class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { id, name, email, cpf, admin, password } = request.body;
        const user = {
            id,
            name,
            email,
            cpf,
            admin,
            password
        };
        const updateUserService = new UpdateUserService();
        await updateUserService.execute(user);
        
        return response.json(user);
    };
}

export { UpdateUserController };