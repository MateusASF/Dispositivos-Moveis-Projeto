import { Request, Response } from "express";
import { DeleteAdressService } from "../../service/Adress/DeleteAdressService";

class DeleteAdressController {
    async handle(request: Request, response: Response) {
        const { id } = request.body;
        console.log("ID: " + id);
        const deleteAdressService = new DeleteAdressService();
        await deleteAdressService.execute({id});
        return response.json({message: 'Deletando categoria'});
    };
}

export { DeleteAdressController };
