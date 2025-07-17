import AddTodo from "./components/addTodo";
import TodoCard from "./components/todoCard";
import prisma from "@/lib/prisma";


export default async function Home() {
  const todos = await prisma.todo.findMany()
  return (
    <div className="py-10 px-4 mb-60">
      {/* AddTodo Section */}
      <div className="mx-auto mb-10">
        <AddTodo />
      </div>

      {/* Todos Section */}
      <ul className="max-w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {todos.map((todo)=> <li key={todo.id}><TodoCard todoId={todo.id}  category = {todo.category} title = {todo.content} /></li>)}
        
      </ul>
    </div>
  );
}
