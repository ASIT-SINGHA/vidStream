import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className="w-full max-w-md">
      <div className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 shadow-sm focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-200">
        <input
          type="text"
          name="searchedValue"
          placeholder="Search..."
          className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
        />
        <button
          type="submit"
          className="text-gray-500 transition hover:text-gray-700"
        >
          <IoSearch className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
