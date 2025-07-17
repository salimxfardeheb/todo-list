"use server";
import prisma from "@/lib/prisma";

export async function deleteTodo(todoId: number) {
  await prisma.todo.delete({ where: { id: todoId } });
}
