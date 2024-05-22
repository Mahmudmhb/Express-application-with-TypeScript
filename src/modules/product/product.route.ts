import express from "express";
import { productControllers } from "./product.controller";

const router = express.Router();
router.post("/", productControllers.createProduct);
router.get("/", productControllers.getProductsAndSearch);
router.get("/:productId", productControllers.getSigleProduct);
router.put("/:productId", productControllers.updateOneProduct);
router.delete("/:productId", productControllers.deleteOneProduct);

export const productsRoute = router;
