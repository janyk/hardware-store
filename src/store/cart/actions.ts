import { Product } from "../products/types";
import { ADD_PRODUCT } from './types';

export function addProduct(product: Product) {
  return {
    type: ADD_PRODUCT,
    payload: product
  };
}
