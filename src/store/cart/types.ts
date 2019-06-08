import { Product } from '../products/types';

export type ProductInCart = Product & { count: number }

export type CartType = {
  [productName: string] : ProductInCart
}

export interface CartState
{
  cart: CartType;
}

export const ADD_PRODUCT = "ADD_PRODUCTS";

interface AddProductAction {
  type: typeof ADD_PRODUCT;
  payload: Product;
}

export type CartActionTypes = AddProductAction;
