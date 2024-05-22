import Joi from "joi";

const variantsJoiSchemaJoi = Joi.object({
  type: Joi.string().required().messages({
    "string.empty": "type is required",
  }),
  value: Joi.string().required().messages({
    "string.empty": "value is required",
  }),
});
const inventoryJoiSchema = Joi.object({
  quantity: Joi.number().required().messages({
    "number.empty": "quantity is required",
  }),
  inStock: Joi.boolean().required().messages({
    "boolean.empty": "inStock is required",
  }),
});

const productJoiSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "product name is required",
  }),
  description: Joi.string().required().messages({
    "string.empty": "product description is required",
  }),
  price: Joi.number().required().messages({
    "number.empty": "product price is required",
  }),
  category: Joi.string().required().messages({
    "string.empty": "product category is required",
  }),
  tags: { type: [String], required: true },
  variants: variantsJoiSchemaJoi.required().messages({
    "object.base": "tags name is required",
  }),
  inventory: inventoryJoiSchema.required().messages({
    "object.base": "inventory is required",
  }),
});
export default productJoiSchema;
