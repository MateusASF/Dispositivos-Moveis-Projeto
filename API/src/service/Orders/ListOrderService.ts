import { getCustomRepository } from "typeorm";
import { OrderRepositories } from "../../repositories/OrderRepositories";

class ListOrderService {
  async execute() {
    const ordersRepositories = getCustomRepository(OrderRepositories);

    const orders = await ordersRepositories.find({
      relations: ["userId", "productId"],
    });

    return orders;
  }
}

export { ListOrderService };

