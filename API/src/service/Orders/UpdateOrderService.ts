import { getCustomRepository } from "typeorm";
import { OrderRepositories } from "../../repositories/OrderRepositories";
import { Product } from "../../entities/Product";
import { User } from "../../entities/User";

interface IOrderRequest {
    id:string;
    userId: User, productId: Product, quantity: number, total: number, discount: number;
  }
  class UpdateOrderService {

    async execute({id, userId, productId, quantity, total, discount }: IOrderRequest) {
      const ordersRepository = getCustomRepository(OrderRepositories);
      const orderAlreadyExists = await ordersRepository.findOne({
        id,
      });
      if (!orderAlreadyExists) {
          throw new Error("User not exists")
      }
      orderAlreadyExists.userId = userId;
      orderAlreadyExists.productId = productId;
      orderAlreadyExists.quantity = quantity;
      orderAlreadyExists.total = total;
      orderAlreadyExists.discount = discount;
      orderAlreadyExists.updated_at = new Date()
      return await ordersRepository.update(id,orderAlreadyExists)
    }

  }
  export { UpdateOrderService };
  