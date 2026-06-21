import { CreateUserDTO } from "./userTypes";
export declare class UserRepository {
    create(data: CreateUserDTO): Promise<{
        id: string;
        name: string;
        document: string;
        phone: string;
        email: string;
        sex: import("../../generated/prisma/enums").Sex;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByEmail(email: string): Promise<{
        id: string;
        name: string;
        document: string;
        phone: string;
        email: string;
        sex: import("../../generated/prisma/enums").Sex;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findByDocument(document: string): Promise<{
        id: string;
        name: string;
        document: string;
        phone: string;
        email: string;
        sex: import("../../generated/prisma/enums").Sex;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
}
