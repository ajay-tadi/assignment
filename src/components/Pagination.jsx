import React, { useContext } from "react";
import { ProductContext } from "../contextApi/ProductContext";

const Pagination = () => {
  const { currentPage, setCurrentPage, totalPages } =
    useContext(ProductContext);

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 my-4">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-gray-800 rounded disabled:opacity-50"
      >
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-3 py-1 rounded ${
            currentPage === i + 1
              ? "bg-[#673AB7] text-white"
              : "bg-gray-700 hover:bg-[#554278]"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-gray-800 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
