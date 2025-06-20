import express from 'express';
import EmployeeController from './employees.controller';
import { asyncHandler } from '../../middlewares/asyncHandler';

const router = express.Router();


router.get('/', asyncHandler(EmployeeController.getAll));
router.get('/:id', asyncHandler(EmployeeController.getById));
router.post('/', asyncHandler(EmployeeController.create));
router.patch('/:id', asyncHandler(EmployeeController.update));
router.delete('/:id', asyncHandler(EmployeeController.remove));

export default router;