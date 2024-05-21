import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};
const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};
const getSigleProductFromDB = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

const updateOneProductFromDB = async (
  _id: string,
  updateData: Partial<Product>
) => {
  const result = await ProductModel.updateOne(
    { _id },
    { $set: updateData },
    { runValidators: true }
  );
  return result;
};
const deleteOneProductFromDB = async (_id: string) => {
  const result = await ProductModel.deleteOne({ _id });
  return result;
};
export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSigleProductFromDB,
  updateOneProductFromDB,
  deleteOneProductFromDB,
};
