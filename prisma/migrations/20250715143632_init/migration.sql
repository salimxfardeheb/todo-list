-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Home', 'Netbox');

-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "category" "Category" NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
