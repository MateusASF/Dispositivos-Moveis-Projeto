import { Request, Response } from "express";
// import fs from "fs";

class CreateUserController {
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

        // const userJson = JSON.stringify(user);
        // fs.writeFileSync("../../UsersDao/users.json", userJson);


        return response.json(user);
    };
}

export { CreateUserController };
