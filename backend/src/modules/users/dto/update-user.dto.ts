//dto for update user
export class UpdateUserDto {
    username?: string;
    password?: string;
    role?: "admin" | "employee";
}