"use server";
import prisma from "@/lib/prisma";

export async function setTodo(idTodo: number) {
  await prisma.todo.update({
    where: { id: idTodo },
    data: { done: true, 
      updatedAt : new Date()
    },
  });
}
