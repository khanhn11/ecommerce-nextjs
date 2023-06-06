import ProductCard from "./ProductCard";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/redux/apiCalls";
import { useEffect } from "react";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  return (
    <div className="bg-white text-gray-700 sm:py-16 lg:py-20 w-full lg:h-screen">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            All Products
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 right-0 h-16 w-16">
        <Link href="/product">
          <KeyboardDoubleArrowUpIcon className="text-[#0c0c0d] " />
        </Link>{" "}
      </div>
    </div>
  );
};

export default ProductList;

{
  /**

<div className="bg-white text-gray-700 sm:py-16 lg:py-20 w-full lg:h-screen">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            All Products
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 right-0 h-16 w-16">
        <Link href="/product">
          <KeyboardDoubleArrowUpIcon className="text-[#0c0c0d] " />
        </Link>{" "}
      </div>
    </div>

*/
}
