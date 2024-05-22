import { Request, Response } from "express";
import app from "../../app";
import { ProductServices } from "./product.service";
import productJoiSchema from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const { error, value } = productJoiSchema.validate(product);
    console.log(value);
    console.log(error);
    const result = await ProductServices.createProductIntoDB(value);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getProductsAndSearch = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    if (searchTerm) {
      // If searchTerm is provided, search products
      const result = await ProductServices.searchProductsFromDB(
        searchTerm as string
      );
      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        data: result,
      });
    } else {
      // If no searchTerm, get all products
      const result = await ProductServices.getAllProductsFromDB();
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err,
    });
  }
};

const getSigleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    //get single product useing id
    const result = await ProductServices.getSigleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const updateOneProduct = async (req: Request, res: Response) => {
  try {
    const { _id, ...updateData } = req.body;
    //update products useing id
    const result = await ProductServices.updateOneProductFromDB(
      _id,
      updateData
    );
    if (result.modifiedCount === 1) {
      res.status(200).json({
        success: true,
        message: "Product updated successfully!",
        data: updateData,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteOneProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    //delete products using id
    const result = await ProductServices.deleteOneProductFromDB(productId);

    if (result.deletedCount === 1) {
      res.status(200).json({
        success: true,
        message: "Product deleted successfully!",
        data: null,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const productControllers = {
  createProduct,
  getProductsAndSearch,
  getSigleProduct,
  updateOneProduct,
  deleteOneProduct,
};
