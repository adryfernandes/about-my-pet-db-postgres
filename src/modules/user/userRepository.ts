import { prisma } from "../../shared/database/prisma"
import { CreateUserDTO } from "./userTypes"

export class UserRepository {
  async create(data: CreateUserDTO) {
    return prisma.user.create({ data })
  }

  async findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } })
  }

  async findByDocument(document: string) {
    return prisma.user.findUnique({ where: { document } })
  }
}