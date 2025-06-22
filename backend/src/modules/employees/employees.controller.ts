import express from 'express';
import EmployeeService from './employees.service';
import EmployeeValidator from './employees.validator';

const PAGE_SIZE = 10;

async function create(req: express.Request, res: express.Response, next: express.NextFunction){
    try {
        const data = await EmployeeValidator.createEmployeeSchema.parseAsync(req.body);
        const newEmployee = await EmployeeService.create(data);
        return res.status(201);
    }catch (error) {
        next(error);
    }
}

async function update(req: express.Request, res: express.Response, next: express.NextFunction){
    try {
        const id = req.params.id;
        const data = await EmployeeValidator.updateEmployeeSchema.parseAsync(req.body);
        const updateEmployee = await EmployeeService.update(id, data);
        return res.status(200).json(updateEmployee.id);
    }catch (error){
        next(error);
    }
}

async function getAll(req: express.Request, res: express.Response, next: express.NextFunction) {
    try{
        const page = parseInt(req.query.page as string) || 1;
        const skip = (page - 1) * PAGE_SIZE;

        const [employees, total] = await Promise.all([
            EmployeeService.getAll({ skip, take: PAGE_SIZE }),
            EmployeeService.count()
        ]);

        res.json({
            data: employees,
            page,
            totalPages: Math.ceil(total / PAGE_SIZE),
            total
        });
    }catch (error){
        next(error);
    }    
}

async function getById(req: express.Request, res: express.Response, next: express.NextFunction) {
    try{
        const id = req.params.id;
        const employee = await EmployeeService.getById(id);
        return res.status(200).json(employee);
    }catch (error){
        next(error);
    }   
}

async function remove(req: express.Request, res: express.Response, next: express.NextFunction) {
    try{
        const id = req.params.id;
        const employee = await EmployeeService.remove(id);
        return res.status(200);
    }catch (error){
        next(error);
    }
}

export default {
    create,
    update,
    getAll,
    getById,
    remove
}