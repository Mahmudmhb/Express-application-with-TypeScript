import express from "express";
import { OrdersController } from "./orders.controller";
const router = express.Router();

router.post("/", OrdersController.createOrders);
router.get("/", OrdersController.RetrieveOrders);

export const OrdersRoute = router;
