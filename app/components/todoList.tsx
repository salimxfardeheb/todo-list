import React from "react";
import AddTodo from "./addTodo";
import { Category } from "../variables";
import TodoCard from "./todoCard";
import prisma from "@/lib/prisma";

type Props = {
  category?: Category;
};

const TodoList = async ({ category }: Props) => {
  const todos = await prisma.todo.findMany({
    where: { category: category as Category },
  });
  return (
    <div>
      <div className="py-10 px-4">
        {/* AddTodo Section */}
        <div className="mx-auto mb-10">
          <AddTodo />
        </div>

        {/* Todos Section */}
        <ul className="max-w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {todos.map((todo) => (
            <li key={todo.id}>
              <TodoCard
                todoId={todo.id}
                category={todo.category}
                title={todo.content}
                done={todo.done}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
