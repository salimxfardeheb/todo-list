import AddTodo from "./components/addTodo";
import FetchTodo from "./components/fetchTodo";

export default function Home() {
  return (
    <div className="py-10 px-4 mb-60">
      {/* AddTodo Section */}
      <div className="mx-auto mb-10">
        <AddTodo />
      </div>

      {/* Todos Section */}
      <div className="max-w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FetchTodo />
      </div>
    </div>
  );
}
