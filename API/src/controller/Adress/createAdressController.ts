import { Request, Response } from "express";
import { CreateAdressService } from "../../service/Adress/CreateAdressService";

class CreateAdressController {
    async handle(request: Request, response: Response) {
        const { bairro, cidade, estado} = request.body;
        const createAdressService = new CreateAdressService();
        const adress =  await createAdressService.execute({
            bairro, cidade, estado
        });
        return response.json(adress);

    };
}

export { CreateAdressController };
