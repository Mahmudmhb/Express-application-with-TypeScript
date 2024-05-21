import { Schema, model } from "mongoose";
import { Inventory, Product, Variants } from "./product.interface";

const variantsSchema = new Schema<Variants>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});
const inventorySchema = new Schema<Inventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});
const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantsSchema], required: true, _id: false },
  inventory: { type: inventorySchema, required: true, _id: false },
});

export const ProductModel = model<Product>("Products", productSchema);
