import { Product } from "../products/types";
import { ProductInCart } from "./types";
import { ADD_PRODUCT, REMOVE_PRODUCT } from './types';

export function addProduct(product: Product) {
  return {
    type: ADD_PRODUCT,
    payload: product
  };
}

export function removeProduct(product: ProductInCart) {
  return {
    type: REMOVE_PRODUCT,
    payload: product
  };
}
