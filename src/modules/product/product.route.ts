import express from "express";
import { productControllers } from "./product.controller";

const router = express.Router();
router.post("/", productControllers.createProduct);
router.get("/", productControllers.getProducts);
router.get("/:productId", productControllers.getSigleProduct);

export const productsRoute = router;
