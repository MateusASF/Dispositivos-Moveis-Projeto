import { Request, Response } from "express";
import { UpdateAdressService } from "../../service/Adress/UpdateAdressService";

class UpdateAdressController {
    async handle(request: Request, response: Response) {
        const { id, bairro, cidade, estado } = request.body;
        const adress = {
            id,
            bairro,
            cidade,
            estado
        };
        const updateAdressService = new UpdateAdressService();
        await updateAdressService.execute(adress);
        return response.json(adress);
    };
}

export { UpdateAdressController };
