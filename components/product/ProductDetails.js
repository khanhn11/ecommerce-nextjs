import React from "react";

const ProductDetails = ({description}) => {
  return (
    <div class="lg:col-span-3">
      <div class="border-b border-gray-300">
        <nav class="flex gap-4">
          <a
            href="#"
            title=""
            class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
          >
            {" "}
            Description{" "}
          </a>

          <a
            href="#"
            title=""
            class="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600"
          >
            Reviews
            <span class="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
              {" "}
              1,209{" "}
            </span>
          </a>
        </nav>
      </div>

      <div class="mt-8 flow-root sm:mt-12">
        <h1 class="text-3xl font-bold">Delivered To Your Door</h1>
        <p class="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          accusantium nesciunt fuga.
        </p>
        <h1 class="mt-8 text-3xl font-bold">From the Fine Farms of Brazil</h1>
        <p class="mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
