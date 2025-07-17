    <div className="flex gap-5 md:gap-10 my-10 bg-gray-100 p-4 w-fit mx-auto font-semibold items-center rounded-xl shadow-md">
      {/* Custom Checkbox */}
      <label className="cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="hidden"
        />
        <div
          className={`w-8 h-8 flex items-center justify-center border-2 rounded-full transition-all duration-100 ${
            checked
              ? "bg-green-600 border-green-600"
              : "bg-white border-gray-300"
          }`}
        >
          {checked && (
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </label>

      <div>Netbox</div>
      <div>setup database</div>

      {/* Delete Button */}
      <button className="flex items-center gap-1 text-gray-700 hover:text-red-500 transition-colors">
        <MdDelete size={20} />
        <span>Delete</span>
      </button>
    </div>