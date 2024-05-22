import Joi from "joi";

const ordersSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "{#value} is not a valid email",
    "string.empty": "Email is required",
  }),
  productId: Joi.string().required().messages({
    "string.empty": "id is required",
  }),
  price: Joi.number()
    .required()
    .messages({ "number.empty": "price is required" }),
  quantity: Joi.number()
    .required()
    .messages({ "number.empty": "price is required" }),
});
export const ordersValidationSchema = {
  ordersSchema,
};
