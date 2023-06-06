import React from "react";
import Image from "next/image";
import Link from "next/link";
import productImg from "../../public/assets/product.jpeg";

const ProductCard = ({ product }) => {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-lg border">
      <div className="aspect-square overflow-hidden">
        <Link
          //href="#"
          href={`/product/${product._id}`}
        >
          <Image
            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
            src={productImg}
            //alt=""
            alt={product.title}
          />
        </Link>
      </div>

      <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
        <div className="mb-2 flex">
          <p className="mr-3 text-sm font-semibold">{product.price}</p>
          <p className="text-xs text-gray-400">{product.discountedPrice}</p>
        </div>
        <h3 className="mb-2 text-sm text-gray-400">{product.title}</h3>
      </div>
      <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
        <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
          Add
        </div>
        <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
          +
        </div>
      </button>
    </div>
  );
};

export default ProductCard;
