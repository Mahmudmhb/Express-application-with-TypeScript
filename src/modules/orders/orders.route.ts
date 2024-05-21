import express from "express";
import { OrdersController } from "./orders.controller";
const router = express.Router();

router.post("/", OrdersController.createOrders);
router.get("/", OrdersController.RetrieveOrdersbyUserEmail);
router.get("/", OrdersController.RetrieveAllOrders);

export const OrdersRoute = router;
