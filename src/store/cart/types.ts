import { Product } from '../products/types';

export type ProductInCart = Product & { count: number }

export type CartType = {
  [productName: string] : ProductInCart
}

export interface CartState
{
  cart: CartType;
  purchaseCartProcessing: boolean;
  purchaseCartSuccess: boolean;
  purchaseCartFailed: boolean;
}

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const PURCHASE_CART_STARTED = "PURCHASE_CART_STARTED";
export const PURCHASE_CART_SUCCESS = "PURCHASE_CART_SUCCESS";
export const PURCHASE_CART_FAILED = "PURCHASE_CART_FAILED";
export const PURCHASE_CART_CLEAR = "PURCHASE_CART_CLEAR";


interface AddProductAction {
  type: typeof ADD_PRODUCT;
  payload: Product;
}

interface RemoveProductAction {
  type: typeof REMOVE_PRODUCT;
  payload: ProductInCart;
}

interface PurchaseCartAction {
  type: typeof PURCHASE_CART_STARTED;
}

interface PurchaseCartFailedAction {
  type: typeof PURCHASE_CART_FAILED;
}

interface PurchaseCartSuccessAction {
  type: typeof PURCHASE_CART_SUCCESS;
}

interface PurchaseCartClearAction  {
  type: typeof PURCHASE_CART_CLEAR;
}

export type CartActionTypes = PurchaseCartClearAction | AddProductAction | RemoveProductAction | PurchaseCartAction | PurchaseCartFailedAction | PurchaseCartSuccessAction;
