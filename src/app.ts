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
// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello World!");
// });
export default app;
