import React from "react";

function ListItem({ product, handleEdit }) {
  return (
    <tr className="border-b border-gray-700 border-b-[#673AB7] hover:bg-gray-700/40">
      <td className="py-3 px-4 font-medium">{product.name}</td>
      <td className="py-3 px-4">{product.price}</td>
      <td className="py-3 px-4 text-gray-400">{product.description}</td>
      <td className="py-3 px-4">{product.stock}</td>
      <td className="py-3 px-4 text-[#7f62b5] cursor-pointer hover:underline">
        <button onClick={() => handleEdit(product)}>Edit</button>
      </td>
    </tr>
  );
}

export default ListItem;
