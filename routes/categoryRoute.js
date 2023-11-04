import express from "express";
import { isAdmin, requireSignIn } from "./../middleware/authMiddleware.js";
import {
  updateCategoryController,
  createCategoryController,
  categoryController,
  singleCategoryController,
  deleteCategoryController,
} from "./../controllers/categoryController.js";
const router = express.Router();
//routes
//create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);
//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);
//getAll Category
router.get("/get-category", categoryController);
//get single category
router.get("/single-category/:slug", singleCategoryController);
//delete category
router.get(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
