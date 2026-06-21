import { prisma } from "../../shared/database/prisma";
import type { CreateUserDTO } from "./userTypes";

export class UserRepository {
  async create(data: CreateUserDTO) {
    return prisma.user.create({ data });
  }

  async findAll() {
    return prisma.user.findMany();
  }

  async findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  }

  async findByDocument(document: string) {
    return prisma.user.findUnique({ where: { document } });
  }
}