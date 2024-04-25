import { EntityRepository, Repository } from "typeorm";
import { Adress } from "../entities/Adress";

@EntityRepository(Adress)
class AdressRepositories extends Repository<Adress> {}

export { AdressRepositories };