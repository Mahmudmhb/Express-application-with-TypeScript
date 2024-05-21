import { Request, Response } from "express";
import { OrdersrService } from "./orders.service";
import { ProductServices } from "../product/product.service";

const createOrders = async (req: Request, res: Response) => {
  try {
    const newOrder = req.body;
    // const { productId } = req.body;
    // console.log(productId);
    // const filter = await ProductServices.getSigleProductFromDB(productId);
    // console.log(filter);
    // console.log(newOrder);
    // if(newOrder.productId === )
    const result = await OrdersrService.createOrdersIntoDB(newOrder);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Order not found",
    });
  }
};
export const OrdersController = {
  createOrders,
};
