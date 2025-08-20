import React from "react";
import CardItem from "./CardItem";
const GridView = ({ products, handleEdit }) => {
  return (
    <div className="flex flex-wrap justify-center bg-[#2C2C2C]">
      {products.map((product, idx) => (
        <CardItem product={product} key={idx} handleEdit={handleEdit} />
      ))}
    </div>
  );
};

export default GridView;
