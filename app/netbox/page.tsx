import React from 'react'
import prisma from "@/lib/prisma";
import AddTodo from '../components/addTodo';
import TodoCard from '../components/todoCard';

type category = "Home" | "Netbox"

const categoryValue: category = "Netbox";
const page = async () => {
  const todos = await prisma.todo.findMany({where : {category : categoryValue }})
  return (
    <div className="py-10 px-4">
      {/* AddTodo Section */}
      <div className="mx-auto mb-10">
        <AddTodo />
      </div>

      {/* Todos Section */}
      <ul className="max-w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {todos.map((todo)=> <li key={todo.id}><TodoCard todoId={todo.id}  category = {todo.category} title = {todo.content} done = {todo.done} /></li>)}
        
      </ul>
    </div>
  )
}

export default page
