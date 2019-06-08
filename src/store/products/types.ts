export interface Product {
  name: string;
  price: number;
}

export interface ProductState {
  products: Product[];
}

export const LOAD_PRODUCTS = "LOAD_PRODUCTS";

interface LoadProductsAction {
  type: typeof LOAD_PRODUCTS;
  payload: Product[];
}

export type ProductActionTypes = LoadProductsAction;
