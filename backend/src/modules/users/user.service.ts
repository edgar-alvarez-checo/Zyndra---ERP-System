import prisma from '../../config/prisma';
import bcrypt from 'bcrypt';
import { CreateUserDto} from './dto/create-user.dto';
import { UpdateUserDto} from './dto/update-user.dto';

async function create(data: CreateUserDto) {

    const existingUser = await prisma.user.findUnique({ where: { username: data.username } });
if (existingUser) {
  throw new Error('El nombre de usuario ya está en uso');
}

    const hashpassword = bcrypt.hashSync(data.password, 10);

    const newUser = await prisma.user.create({
        data:{
            username: data.username,
            password: hashpassword,
            role: data.role
        }
    });
    return newUser;
};

async function update(id: string, data: UpdateUserDto) {

    const ExistUser = await prisma.user.findUnique({
        where: {
            id
        }
    });
    if (!ExistUser) {
        throw new Error(`User ${id} not found`);
    }

    const updateUser = await prisma.user.update({
        where: {
            id
        },
        data: {
            username: data.username,
            password: data.password,
            role: data.role
        }
    });
    return updateUser;
};

async function getAll({ skip = 0, take = 10 }) {
    const users = await prisma.user.findMany({ skip, take });
    return users;
};

async function count() {
    return prisma.user.count();
}

async function getById(id: string){

    const user = await prisma.user.findUnique({
        where: {
            id
        }
    });

    if(!user) throw new Error(`User ${id} not found`);
    return user;
};

async function remove(id: string){

    const ExistUser = await prisma.user.findUnique({
        where: {
            id
        }
    });
    if (!ExistUser) {
        throw new Error(`User ${id} not found`);
    }

    const deleteUser = await prisma.user.delete({
        where: {
            id
        }
    });
    return {message: `User ${id} deleted`};
};

export default {
    create,
    update,
    getAll,
    count,
    getById,
    remove
};