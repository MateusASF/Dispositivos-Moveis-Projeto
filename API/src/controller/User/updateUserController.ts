import e, { Request, Response } from "express";

class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, admin, password } = request.body;
        console.log("Nome: " + name);
        console.log("Email: " + email);
        console.log("Admin: " + admin);
        console.log("Senha: " + password);
        const user = {
            name,
            email,
            admin,
            password
        };
        return response.json(user);
    };
}

export { UpdateUserController };