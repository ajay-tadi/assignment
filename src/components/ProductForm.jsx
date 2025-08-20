import React, { useContext, useEffect, useState } from "react";
import TextInput from "./TextInput";
import { ProductContext } from "../contextApi/ProductContext";

const ProductForm = ({ isOpen, setIsOpen, product = {} }) => {
  const { addProduct, editProduct } = useContext(ProductContext);

  // check if editing or adding
  const isEditing = Object.keys(product).length > 0;

  // initialize state (copy product into formData)
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: "",
  });

  // if product changes (edit flow), update formData
  useEffect(() => {
    if (isEditing) {
      setFormData(product); // load product for editing
    } else {
      setFormData({
        name: "",
        price: "",
        category: "",
        stock: "",
        description: "",
      }); // reset form for adding
    }
  }, [product, isEditing, isOpen]);

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.price) newErrors.price = "Price is required.";
    else if (isNaN(formData.price) || Number(formData.price) <= 0)
      newErrors.price = "Price must be a valid number.";
    if (!formData.category) newErrors.category = "Category is required.";
    if (formData.stock && isNaN(formData.stock))
      newErrors.stock = "Stock must be a number.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (isEditing) {
        editProduct(formData);
      } else {
        addProduct(formData);
      }
      setIsOpen(false); // close modal on success
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-zinc-900 rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold text-center mb-4">
              {isEditing ? "Edit Product" : "Add Product"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <TextInput
                label="Name"
                required
                type="text"
                name="name"
                value={formData.name}
                handleChange={handleChange}
                error={errors.name}
              />
              <TextInput
                label="Price"
                required
                type="number"
                name="price"
                value={formData.price}
                handleChange={handleChange}
                error={errors.price}
              />
              <TextInput
                label="Category"
                required
                type="text"
                name="category"
                value={formData.category}
                handleChange={handleChange}
                error={errors.category}
              />
              <TextInput
                label="Stock"
                type="number"
                name="stock"
                value={formData.stock}
                handleChange={handleChange}
              />
              <TextInput
                label="Description"
                type="text"
                name="description"
                value={formData.description}
                handleChange={handleChange}
              />

              <button
                type="submit"
                className="w-full bg-[#673AB7] text-white py-2 rounded hover:bg-[#554278] transition"
              >
                {isEditing ? "Update Product" : "Add Product"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductForm;
