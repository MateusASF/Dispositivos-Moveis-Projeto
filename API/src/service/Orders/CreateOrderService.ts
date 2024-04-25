import { getCustomRepository } from "typeorm";
import { Product } from "../../entities/Product";
import { User } from "../../entities/User";
import { OrderRepositories } from "../../repositories/OrderRepositories";

interface IOrderRequest {
  userId: User, productId: Product, quantity: number, total: number, discount: number;
}

class CreateOrderService {
    async execute({ userId, productId, quantity, total, discount }: IOrderRequest) {
        const ordersRepository = getCustomRepository(OrderRepositories);
        const order = ordersRepository.create({ userId, productId, quantity, total, discount });
        await ordersRepository.save(order);
        return order;
      }
}

export { CreateOrderService };
