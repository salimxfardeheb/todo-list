"use client";
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";

const addTodo = () => {
  const typeOfTodo = ["Home", "Netbox"];
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Select category");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setShowDropdown(false);
  };

  return (
    <div>
      <div className="flex justify-center mt-10">
        <form className="w-full max-w-xl p-6">
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
                required
                className="flex-grow p-2.5 text-sm text-gray-900  border border-gray-300 rounded-l-lg bg-blue-200"
              />
              <button
                type="submit"
                className="p-2.5 text-sm bg-gradient-to-l from-blue-500 to-blue-200 rounded-r-lg cursor-pointer"
              >
                <IoIosAdd size={22} className="text-white" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default addTodo;
