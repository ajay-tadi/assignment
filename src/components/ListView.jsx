import React from "react";
import ListItem from "./ListItem";

const ListView = ({ products, handleEdit }) => {
  return (
    <div>
      <table className="w-full text-left border-collapse bg-[#2C2C2C]">
        <thead>
          <tr className="border-b border-b-[#673AB7] text-gray-400">
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Price</th>
            <th className="py-3 px-4">Description</th>
            <th className="py-3 px-4">Quantity</th>
            <th className="py-3 px-4"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => (
            <ListItem product={product} key={idx} handleEdit={handleEdit} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListView;
