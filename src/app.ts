import express, { Application, Request, Response } from "express";
import cors from "cors";
import { productsRoute } from "./modules/product/product.route";
import { OrdersRoute } from "./modules/orders/orders.route";
const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use("/api/products", productsRoute);
app.use("/api/orders", OrdersRoute);
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
