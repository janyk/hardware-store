import { Product } from "../products/types";
import { ProductInCart } from "./types";
import { PURCHASE_CART_CLEAR, ADD_PRODUCT, REMOVE_PRODUCT, PURCHASE_CART_STARTED, PURCHASE_CART_SUCCESS, PURCHASE_CART_FAILED } from './types';

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

export function clearCartStatus() {
  return {
    type: PURCHASE_CART_CLEAR
  };
}

export function startCartPurchase() {
  return {
    type: PURCHASE_CART_STARTED
  };
}

export function cartPurchaseFailed() {
  return {
    type: PURCHASE_CART_FAILED
  };
}

export function cartPurchaseSuccess() {
  return {
    type: PURCHASE_CART_SUCCESS
  };
}