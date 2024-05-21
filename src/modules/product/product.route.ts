import express from "express";
import { productControllers } from "./product.controller";

const router = express.Router();
router.post("/products/", productControllers.createProduct);
router.get("/", productControllers.getProducts);
router.get("/products", productControllers.searchAllProducts);
router.get("/products/:productId", productControllers.getSigleProduct);
router.put("/products/:productId", productControllers.updateOneProduct);
router.delete("/products/:productId", productControllers.deleteOneProduct);

export const productsRoute = router;
