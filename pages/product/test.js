import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/redux/apiCalls";
import { useEffect } from "react";

const test = () => {
    const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  return (
    <div>
    {products.map((product) =>(
        <p></p>
   ))}
    </div>
  )
}

export default test