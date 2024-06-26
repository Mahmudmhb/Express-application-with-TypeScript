import { Request, Response } from "express";
import { OrdersService } from "./orders.service";
import { ordersValidationSchema } from "./orders.validation";
import { error } from "console";

const createOrders = async (req: Request, res: Response) => {
  try {
    const newOrder = req.body;
    //validation with Joi
    const { error, value } =
      ordersValidationSchema.ordersSchema.validate(newOrder);
    // create a new order from clint
    const result = await OrdersService.createOrdersIntoDB(value);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: error,
    });
  }
};

const RetrieveOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    if (email) {
      // If email query parameter is present, retrieve orders by email
      const result =
        (await OrdersService.getOrdersFromDBUsingEmail(email as string)) || [];
      if (result.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Order not found",
        });
      }
      return res.status(200).json({
        success: true,
        message: "Orders fetched successfully for user email!",
        data: result,
      });
    } else {
      // If no email query parameter, retrieve all orders
      const result = await OrdersService.getAllOrdersFromDB();
      return res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Route not found",
    });
  }
};

export const OrdersController = {
  createOrders,
  RetrieveOrders,
};
