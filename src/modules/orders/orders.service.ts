import { ProductModel } from "../product/product.model";
import { Orders } from "./orders.interfase";
import { OrdersModel } from "./orders.model";

const createOrdersIntoDB = async (orders: Orders) => {
  const productExists = await ProductModel.findById(orders.productId);
  if (!productExists) {
    throw new Error("Product does not exist");
  }
  const result = OrdersModel.create(orders);

  return result;
};
export const OrdersrService = {
  createOrdersIntoDB,
};
