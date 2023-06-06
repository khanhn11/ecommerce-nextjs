import { publicRequest } from "@/util/requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  getProductByIdStart,
  getProductByIdSuccess,
  getProductByIdFailure,
} from "./productSlice";

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());

  try {
    const res = await publicRequest.get("/product");
    dispatch(getProductSuccess(res.data));
  } catch (error) {
    console.error(error);
    dispatch(getProductFailure());
  }
};

export const getProduct = async (id, dispatch) => {
  dispatch(getProductByIdStart());

  try {
    const res = await publicRequest.get(`/product/${id}`);
    dispatch(getProductByIdSuccess(res.data));
  } catch (error) {
    console.error(error);
    dispatch(getProductByIdFailure());
  }
};
