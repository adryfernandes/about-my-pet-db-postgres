import { prisma } from "../../shared/database/prisma";
export class UserRepository {
    async create(data) {
        return prisma.user.create({ data });
    }
    async findByEmail(email) {
        return prisma.user.findUnique({ where: { email } });
    }
    async findByDocument(document) {
        return prisma.user.findUnique({ where: { document } });
    }
}
