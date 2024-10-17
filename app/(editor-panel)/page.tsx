import { getBoards } from "@/services/board";
import { getTasks } from "@/services/task";
import { getUsers } from "@/services/user";
import { Board, Task, User } from "@prisma/client";

export default async function Home() {
  const boards: Board[] = await getBoards();
  const tasks: Task[] = await getTasks();
  const users: User[] = await getUsers();
  console.log(boards, tasks, users);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Length of boards: {boards.length}</h1>
      {boards.map((board) => (
        <div key={board.id}>
          <h1>name: {board.title}</h1>
          <h1>userId: {board.userId}</h1>
        </div>
      ))}
      <h1>Length of tasks: {tasks.length}</h1>
      <h1>Length of tasks: {users.length}</h1>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>name: {task.title}</h1>
          <h1>Description: {task.description}</h1>
          <h1>name: {task.priority}</h1>
          <h1>userId: {task.userId}</h1>
          <h1>boardId: {task.boardId}</h1>
        </div>
      ))}
    </div>
  );
}
