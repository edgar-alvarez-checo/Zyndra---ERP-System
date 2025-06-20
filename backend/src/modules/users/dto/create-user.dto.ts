// dto for create user
export interface CreateUserDto {
    username: string;
    password: string;
    role: "admin" | "employee";
}