"use client";
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { useRouter } from "next/navigation";
import { addTodoAction } from "@/app/actions/addTodo";
import { Category } from "../variables";

const addTodo = () => {
  const typeOfTodo = ["Home", "Netbox"];
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Select category");
  const [todoContent, setTodoContent] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [contentMessage, setContentMessage] = useState("");

  const router = useRouter();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setShowDropdown(false);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCategory === "Select category") {
      setContentMessage("Select category please...");
      return;
    }
    await addTodoAction(selectedCategory as Category, todoContent);
    setTodoContent("");
    setSelectedCategory("Select category");
    setContentMessage("Data added succesfully !");

    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      setContentMessage("");
      router.refresh();
    }, 1500);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10">
        <form className="w-full max-w-xl p-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-2 items-center">
            {/* Dropdown */}
            <div className="relative w-full md:w-1/3">
              <button
                type="button"
                onClick={toggleDropdown}
                className="w-full flex items-center justify-between py-2.5 px-4 text-sm font-mono text-gray-900 bg-blue-100 border border-green-100 rounded-lg hover:bg-blue-200 focus:outline-none"
              >
                {selectedCategory}
                <svg
                  className={`w-3 h-3 ml-2 transition-transform ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </button>

              {showDropdown && (
                <ul className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-md z-20 py-2 text-sm text-gray-700">
                  {typeOfTodo.map((todo) => (
                    <li key={todo}>
                      <button
                        type="button"
                        onClick={() => handleSelectCategory(todo)}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        {todo}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex w-full md:w-2/3">
              <input
                type="text"
                placeholder="Add new todo..."
                id="content"
                name="content"
                value={todoContent}
                onChange={(e) => setTodoContent(e.target.value)}
                required
                className="flex-grow p-2.5 text-sm text-gray-900  border border-gray-300 rounded-l-lg bg-blue-200"
              />
              <button
                type="submit"
                className="p-2.5 text-sm bg-gradient-to-l from-blue-500 to-blue-200 hover:bg-blue-500 hover:bg-none transition-opacity hover:scale-[101%] rounded-r-lg cursor-pointer"
              >
                <IoIosAdd size={22} className="text-white" />
              </button>
            </div>
          </div>
        </form>
        <span>{contentMessage}</span>
      </div>
    </div>
  );
};

export default addTodo;
