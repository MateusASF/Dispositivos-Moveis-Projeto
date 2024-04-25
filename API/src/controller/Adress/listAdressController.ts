import { Request, Response } from "express";
import { ListAdressService } from "../../service/Adress/ListAdressService";


class ListAdressController {
    async handle(request: Request, response: Response) {
        const listadressService = new ListAdressService();
        const adresses = await listadressService.execute();
        return response.json(adresses);
    };
}

export { ListAdressController };
