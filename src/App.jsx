import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { ProductContext } from "./contextApi/ProductContext";
import productsData from "./data/products.json";
import Pagination from "./components/Pagination";

function App() {
  const [products, setProducts] = useState(productsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchQuery.trim() === "") {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(
          products.filter((p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      }
      setCurrentPage(1);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchQuery, products]);

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now().toString() }]);
  };

  const editProduct = (updatedProduct) => {
    setProducts(
      products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products: filteredProducts, 
        searchQuery,
        setSearchQuery, 
        currentProducts,
        currentPage,
        setCurrentPage,
        totalPages,
        addProduct,
        editProduct,
      }}
    >
      <div className="w-screen bg-[#181818] pb-10 ">
        <Header />
        <ProductList />
        <Pagination />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
