-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "sex" "Sex" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
