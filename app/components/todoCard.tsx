"use client";
import { MdDelete } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
type Props = {
  category: string;
  title: string;
};

const TodoCard = ({ category, title }: Props) => {
  return (
    <div className="mx-auto my-6 w-full max-w-md sm:max-w-lg md:max-w-2xl bg-blue-50 rounded-xl shadow-lg p-6 flex flex-col gap-6">
      {/* Todo Content */}
      <div className="flex flex-col gap-2">
        <div className="text-xs text-gray-500 uppercase tracking-wide">
          Category
        </div>
        <div className="text-base text-blue-800 font-semibold">{category}</div>

        <div className="text-xs text-gray-500 uppercase tracking-wide mt-4">
          Title
        </div>
        <div className="text-2xl font-bold text-gray-800">{title}</div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
        <button className="flex items-center gap-2 px-6 py-2 bg-white text-gray-700 text-sm font-medium rounded-md border border-gray-200 shadow hover:text-green-600 transition">
          <IoCheckmarkDoneSharp size={20} />
          <span>Mark as Done</span>
        </button>

        <button className="flex items-center gap-2 px-6 py-2 bg-white text-gray-700 text-sm font-medium rounded-md border border-gray-200 shadow hover:text-red-500 transition">
          <MdDelete size={20} />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
