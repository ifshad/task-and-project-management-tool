import prisma from "@/lib/prisma";
import { User, Prisma } from "@prisma/client";

export async function createUser(data: Prisma.UserCreateInput) {
  const user = await prisma.user.create({ data });
  return user;
}

export async function getUsers(): Promise<User[]> {
  const users = await prisma.user.findMany();
  return users;
}
