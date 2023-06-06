import ProductDetails from "@/components/product/ProductDetails";
import ProductImage from "@/components/product/ProductImage";
import ProductOption from "@/components/product/ProductOption";
import NavigateLink from "@/components/product/NavigateLink";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { publicRequest } from "@/util/requestMethods";
import axios from "axios";

const Product = () => {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState([]);

  const { id } = router.query;

  console.log(id)

  const getProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/product/${id}`);
      setSelectedProduct(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

 
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 mt-10">
        <NavigateLink />
        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <ProductImage />
          <ProductOption
            title={selectedProduct.title}
            price={selectedProduct.price}
            color={selectedProduct.color}
            size={selectedProduct.size}
          />
          <ProductDetails description={selectedProduct.desc} />
        </div>
      </div>
    </section>
  );
};

export default Product;
