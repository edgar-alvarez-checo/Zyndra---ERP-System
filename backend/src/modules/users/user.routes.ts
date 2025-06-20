import express from "express";
import UserController from "./user.controller";
import { asyncHandler } from "../../middlewares/asyncHandler";

const router = express.Router();


router.get('/', asyncHandler(UserController.getAll));
router.get('/:id', asyncHandler(UserController.getById));
router.post('/', asyncHandler(UserController.create));
router.patch('/:id', asyncHandler(UserController.update));
router.delete('/:id', asyncHandler(UserController.remove));

export default router;
