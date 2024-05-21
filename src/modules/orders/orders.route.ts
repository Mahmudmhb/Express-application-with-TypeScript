import express from "express";
import { OrdersController } from "./orders.controller";
const router = express.Router();

router.post("/", OrdersController.createOrders);

export const OrdersRoute = router;
