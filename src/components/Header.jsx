import { useContext } from "react";
import { ProductContext } from "../contextApi/ProductContext";

const Header = () => {
  const { searchQuery, setSearchQuery } = useContext(ProductContext);

  return (
    <header className="bg-[#181818] border-b-[1px] border-gray-800 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 text-xl font-semibold text-white">
            SHOP SITE
          </a>
        </div>

        <input
          className="max-w-80 px-4 mx-4 w-[50%] focus:outline-none border-1 border-gray-600 flex items-center rounded-[40px]"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="search products"
        />

        <div className=" lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-white">
            Log in
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Header;
