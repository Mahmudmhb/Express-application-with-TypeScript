import { Request, Response } from "express";
import { OrdersrService } from "./orders.service";
import { ProductServices } from "../product/product.service";

const createOrders = async (req: Request, res: Response) => {
  try {
    const newOrder = req.body;
    const result = await OrdersrService.createOrdersIntoDB(newOrder);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Insufficient quantity available in inventory",
    });
  }
};

const RetrieveAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrdersrService.getAllOrdersFromDB();
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Order not found",
    });
  }
};

const RetrieveOrdersbyUserEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    if (!email || typeof email !== "string") {
      return res.status(400).json({
        success: false,
        message: "Email is required and should be a string.",
      });
    }
    const result = await OrdersrService.getOrdersFromDBUsingEmail(
      email as string
    );
    console.log(result);
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully for user email!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Route not found",
    });
  }
};
export const OrdersController = {
  createOrders,
  RetrieveAllOrders,
  RetrieveOrdersbyUserEmail,
};
