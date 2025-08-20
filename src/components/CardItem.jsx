import React from "react";

const CardItem = ({ product, handleEdit }) => {
  return (
    <div className="p-2 m-4 flex justify-center flex-col text-center bg-[#181818]  border-b-[1px] border-b-[#673AB7] border-gray-800 shadow-sm hover:shadow-lg shadow-[#673AB7] w-60 h-60 border-1 rounded-[10px] ">
      <h2 className="text-xl font-medium  text-center">{product.name}</h2>
      <div className="flex justify-around w-full mt-2">
        <p className="text-sm ">₹ {product.price}</p>
        <p className="text-sm">Quantity: {product.stock}</p>
      </div>
      <p className="  mx-4 my-2 text-center text-gray-400">
        {product.description}
      </p>
      <button
        onClick={() => handleEdit(product)}
        className="rounded-md bg-[#673AB7] px-5 py-1 mt-5 text-sm font-semibold text-white shadow-xs hover:bg-[#554278] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 text-indigo-400 cursor-pointer hover:underline"
      >
        Edit
      </button>
    </div>
  );
};

export default CardItem;
