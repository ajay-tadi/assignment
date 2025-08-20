import React from "react";

const ToggleButton = ({ setView, view }) => {
  return (
    <div className="flex border mr-2 border-[#673AB7] rounded-full overflow-hidden">
      <button
        onClick={() => setView("list")}
        className={`px-4 py-2 text-sm font-medium transition ${
          view === "list"
            ? "bg-[#673AB7] text-white"
            : "text-[#673AB7] bg-transparent"
        }`}
      >
        List
      </button>
      <button
        onClick={() => setView("grid")}
        className={`px-4 py-2 text-sm font-medium transition ${
          view === "grid"
            ? "bg-[#673AB7] text-white"
            : "text-[#673AB7] bg-transparent"
        }`}
      >
        Grid
      </button>
    </div>
  );
};

export default ToggleButton;
