import { Request, Response } from "express";
import { DeleteUserService } from "../../service/User/deleteUserService";

class DeleteUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.body;
        console.log("ID: " + id);
        const deleteUserService = new DeleteUserService();
        const msg = await deleteUserService.execute({id})
        return response.json(msg);
    }
}

export { DeleteUserController };
