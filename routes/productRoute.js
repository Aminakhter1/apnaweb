import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  createProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  deleteProductController,
  updateProductController,
  productFiltersController,
  productCountController,
  productListController,
  searchProductController,
  relatedProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";
const router = express.Router();
//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//udate product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);
//single product get
router.get("/get-product/:slug", getSingleProductController);
//get photo
router.get("/product-photo/:pid", productPhotoController);
//delete product
router.delete("/delete-product/:pid", deleteProductController);
//for filter
router.post("/product-filters", productFiltersController);
//product count
router.get("/product-count", productCountController);
//product per page
router.get("/product-list/:page", productListController);
//search product
router.get("/search/:keyword", searchProductController);
//similar product
router.get("/related-product/:pid/:cid", relatedProductController);

export default router;