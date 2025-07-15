// app/actions/addTodo.ts
"use server";

import prisma from "@/lib/prisma";

export async function addTodoAction(category: "Home" | "Netbox", content: string) {
  await prisma.todo.create({
    data: {
      category,
      content,
    },
  });
}
