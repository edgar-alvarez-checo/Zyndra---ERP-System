import prisma from '../../config/prisma';
import { CreateEmployeesDto } from './dto/create-employees.dto';
import { UpdateEmployeesDto } from './dto/update-employees.dto';


async function create(data: CreateEmployeesDto){
    const newEmployee = await prisma.employee.create({
        data: {
            userId: data.userId,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone
        }
    });
    return newEmployee;
}

async function update(id: string, data: UpdateEmployeesDto) {

    const ExitsEmployee = await prisma.employee.findUnique({
        where: {
            id
        }
    });
    if (!ExitsEmployee) {
        throw new Error(`Employee ${id} not found`);
    }

    const updateEmployee = await prisma.employee.update({
        where:{
            id
        },
        data:{
            userId: data.userId,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone
        }
    });
    return updateEmployee;
}

async function getAll({ skip = 0, take = 10 }){
    const employee = await prisma.employee.findMany({ skip, take });
    return employee;
}

async function count() {
    return prisma.employee.count();
}

async function getById(id: string){
    const employee = await prisma.employee.findUnique({
        where: {
            id
        }
    });
    if (!employee) {
        throw new Error(`Employee ${id} not found`);
    }

    return employee;
}

async function remove(id: string) {

    const ExitsEmployee = await prisma.employee.findUnique({
        where: {
            id
        }
    });
    if (!ExitsEmployee) {
        throw new Error(`Employee ${id} not found`);
    }

    const deleteEmployee = await prisma.employee.delete({
        where: {
            id
        }
    });
    return {message: `Employee ${id} deleted`};
    
}

export default {
    create,
    update,
    getAll,
    count,
    getById,
    remove
}