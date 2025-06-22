import UserValidator  from "./user.validator";
import express from "express";
import UserService  from "./user.service";

const PAGE_SIZE = 10;

async function create(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
    const data = await UserValidator.createUserSchema.parseAsync(req.body); 
    data.role = data.role.toLowerCase() as "admin" | "employee";
    const newUser = await UserService.create(data);
    return res.status(201);
    } catch (error) {
    next(error);
    }
};

async function update(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
    const id = req.params.id;
    const data = await UserValidator.updateUserSchema.parseAsync(req.body);

    if (data.role) {
      data.role = data.role.toLowerCase() as "admin" | "employee";
    }
    
    const updateUser = await UserService.update(id, data);
    return res.status(200).json(updateUser.id);
    } catch (error) {
    next(error);
    }
};

async function getAll(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
            const page = parseInt(req.query.page as string) || 1;
            const skip = (page - 1) * PAGE_SIZE;
    
            const [employees, total] = await Promise.all([
                UserService.getAll({ skip, take: PAGE_SIZE }),
                UserService.count()
            ]);
    
            res.json({
                data: employees,
                page,
                totalPages: Math.ceil(total / PAGE_SIZE),
                total
            });
    } catch (error) {
    next(error);
    }
};

async function getById(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
    const id = req.params.id;
    const user = await UserService.getById(id);
    return res.status(200).json(user);
    } catch (error) {
        
        next(error);
        return res.status(404).json({ message: "User not found" });
    }
};

async function remove(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
    const id = req.params.id;
    const deleteUser = await UserService.remove(id);
    return res.status(200);
    } catch (error) {
    next(error);
    }
};

export default{
    create,
    update,
    getAll,
    getById,
    remove
};