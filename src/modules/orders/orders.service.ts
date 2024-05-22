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
const getAllOrdersFromDB = async () => {
  const result = await OrdersModel.find();
  return result;
};
const getOrdersFromDBUsingEmail = async (email: string) => {
  const result = await OrdersModel.find({ email });
  if (result.length > 0) {
    return result;
  }
};
export const OrdersService = {
  createOrdersIntoDB,
  getAllOrdersFromDB,
  getOrdersFromDBUsingEmail,
};
