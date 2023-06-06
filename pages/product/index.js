import ProductList from "@/components/product/ProductList";

const index = () => {
  return (
    <div className="w-full h-screen">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center">
        <ProductList />
      </div>
    </div>
  );
};

export default index;
