import { Sex } from "../../generated/prisma/enums";
export interface CreateUserDTO {
    name: string;
    document: string;
    phone: string;
    email: string;
    sex: Sex;
}
