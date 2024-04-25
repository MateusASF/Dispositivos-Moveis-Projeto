import { Request, Response } from "express";
import { UpdateAdressService } from "../../service/Adress/UpdateAdressService";

class UpdateAdressController {
    async handle(request: Request, response: Response) {
        const { name, id } = request.body;
        console.log("Nome: " + name);
        console.log("Id: " + id);
        const adress = {
            name,
            id
        };
        const updateAdressService = new UpdateAdressService();
        await updateAdressService.execute(adress);
        return response.json(adress);
    };
}

export { UpdateAdressController };
