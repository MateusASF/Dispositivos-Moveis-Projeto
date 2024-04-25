import { getCustomRepository } from "typeorm";
import { OrderRepositories } from "../../repositories/OrderRepositories";
interface IOrderDelete {
    id: string;
}
class DeleteOrderService {
  async execute({id}:IOrderDelete) {
      const ordersRepositories = getCustomRepository(OrderRepositories);
      const orderAlreadyExists = await ordersRepositories.findOne({
        id,
      });

      if (!orderAlreadyExists) {
          throw new Error("Order not exists");
      }
      return await ordersRepositories.delete(id);           
  }
}
export { DeleteOrderService };
