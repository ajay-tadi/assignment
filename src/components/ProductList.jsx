import React, { useContext, useState } from "react";
import ListView from "./ListView";
import GridView from "./GridView";
import ToggleButton from "./ToggleButton";

import ProductForm from "./ProductForm";
import { ProductContext } from "../contextApi/ProductContext";

const ProductList = () => {
  const { currentProducts } = useContext(ProductContext);

  const [view, setView] = useState("list");

  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({});

  const handleEdit = (e) => {
    setIsOpen(true);
    setProduct(e);
  };
  
  const handleAddProduct = () => {
    setIsOpen(true);
    setProduct({});
  };

  const renderView = () => {
    switch (view) {
      case "list":
        return <ListView products={currentProducts} handleEdit={handleEdit} />;
      case "grid":
        return <GridView products={currentProducts} handleEdit={handleEdit} />;

      default:
        return <ListView products={currentProducts} handleEdit={handleEdit} />;
    }
  };
  return (
    <div className="p-6  min-h-screen w-full text-white ">
      <div className="max-w-6xl mx-auto bg-[#2C2C2C] rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl font-semibold">Product List</h1>
          </div>
          <div className="flex ">
            <ToggleButton setView={setView} view={view} />
            <button
              onClick={handleAddProduct}
              className="px-4 py-1 bg-[#673AB7] text-white rounded-md hover:bg-[#554278]"
            >
              Add Product
            </button>
          </div>
        </div>

        <div className="overflow-x-auto  ">
          {renderView()}
          {currentProducts.length === 0 && (
            <div className="text-center mt-6">No products found</div>
          )}
          <ProductForm
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            product={product}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
