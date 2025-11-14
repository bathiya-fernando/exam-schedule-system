import { useState } from "react";

export default function SortByButton({ onSortChange }) {
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSorting = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    onSortChange(newOrder);
    console.log("sortOrder clicked", sortOrder);
  };

  return (
    <button
      className="px-5 py-2  bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition-all duration-200"
      onClick={handleSorting}
    >
      Sort By: {sortOrder.toUpperCase()}
    </button>
  );
}
