import { Product } from '../products/types';

export type ProductInCart = Product & { count: number }

export type CartType = {
  [productName: string] : ProductInCart
}

export interface CartState
{
  cart: CartType;
}

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

interface AddProductAction {
  type: typeof ADD_PRODUCT;
  payload: Product;
}

interface RemoveProductAction {
  type: typeof REMOVE_PRODUCT;
  payload: ProductInCart;
}

export type CartActionTypes = AddProductAction | RemoveProductAction;
