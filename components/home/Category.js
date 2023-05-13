import { useState, useEffect } from "react";
import axios from "axios";

const Category = () => {

  const [categories, setCategories] = useState([])

  return (
    <div id="category" className="w-full h-screen p-6 py-28">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center">
        <div>
          <p className="uppercase text-sm tracking widest">
            LET'S DISCOVER SOMETHING TOGETHER
          </p>
          <h1 className="py-4">
            Hi, We're' <span className="text-[#00ba7cc4]">Name Here</span>
          </h1>
          <h1 className="py-4">Our Categories</h1>
          <p className="py-4 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
