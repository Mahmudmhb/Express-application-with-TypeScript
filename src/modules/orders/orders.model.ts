import { Schema, model } from "mongoose";
import { Orders } from "./orders.interfase";

const odersSchema = new Schema<Orders>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const OrdersModel = model<Orders>("Orders", odersSchema);
