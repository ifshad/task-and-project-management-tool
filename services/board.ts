import prisma from "@/lib/prisma";
import { Board, Prisma } from "@prisma/client";

// interface BoardsWithTasksUsers extends Board {
//   tasks: Task[];
//   users: User[];
// }

export async function createBoard(data: Prisma.BoardCreateInput) {
  const board = await prisma.board.create({ data });
  return board;
}

export async function getBoards(): Promise<Board[]> {
  const boards = await prisma.board.findMany();
  return boards;
}
