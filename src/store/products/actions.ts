import { Product, LOAD_PRODUCTS } from "./types";

export function loadProducts(newProducts: Product[]) {
  return {
    type: LOAD_PRODUCTS,
    payload: newProducts
  };
}
