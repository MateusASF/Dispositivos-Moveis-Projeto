import { Request, Response } from "express";
import { UpdateUserService } from "../../service/User/UpdateUserService";

class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { id, name, email, admin, password } = request.body;
        console.log("Nome: " + name);
        console.log("Email: " + email);
        console.log("Admin: " + admin);
        console.log("Senha: " + password);
        const user = {
            id,
            name,
            email,
            admin,
            password
        };
        const updateUserService = new UpdateUserService();
        await updateUserService.execute(user);
        
        return response.json(user);
    };
}

export { UpdateUserController };