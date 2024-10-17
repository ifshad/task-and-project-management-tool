import prisma from "@/lib/prisma";
import { Task, Prisma } from "@prisma/client";

// interface BoardsWithTasksUsers extends Board {
//   tasks: Task[];
//   users: User[];
// }

export async function createTask(data: Prisma.TaskCreateInput) {
  const task = await prisma.task.create({ data });
  return task;
}

export async function getTasks(): Promise<Task[]> {
  const tasks = await prisma.task.findMany();
  return tasks;
}
