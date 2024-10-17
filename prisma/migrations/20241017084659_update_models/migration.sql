/*
  Warnings:

  - Made the column `password` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "boards" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "tasks" ALTER COLUMN "startDate" DROP NOT NULL,
ALTER COLUMN "endDate" DROP NOT NULL,
ALTER COLUMN "priority" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "password" SET NOT NULL;
