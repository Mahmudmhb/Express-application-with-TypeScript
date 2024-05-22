import { ProductModel } from "../product/product.model";
import { Orders } from "./orders.interfase";
import { OrdersModel } from "./orders.model";

const createOrdersIntoDB = async (orders: Orders) => {
  const { productId } = orders;
  const productExists = await ProductModel.findById(productId);
  if (!productExists) {
    throw new Error("Product does not exist");
  } else {
    const updateQuantity = productExists?.inventory.quantity - orders.quantity;
    if (productExists?.inventory.quantity > 0 && 0 <= updateQuantity) {
      const result = OrdersModel.create(orders);
      const updateDataProduct = await ProductModel.updateOne(
        {
          _id: productId,
        },
        {
          "inventory.quantity": updateQuantity,
          "inventory.inStock": updateQuantity > 0,
        }
      );
      console.log(updateDataProduct);

      return result;
    } else {
      throw new Error("Insufficient quantity available in inventory");
    }
  }
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
