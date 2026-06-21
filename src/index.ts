import "dotenv/config"
import { prisma } from "./shared/database/prisma"

async function main() {
  const result = await prisma.$queryRaw`SELECT 1 as result`
  console.log("Conexão OK:", result)
}

main()
  .catch((e) => console.error("Erro na conexão:", e))
  .finally(() => prisma.$disconnect())