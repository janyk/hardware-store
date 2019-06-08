import { Product } from '../products/types';
import {
  CartType,
  CartState,
  ADD_PRODUCT,
  CartActionTypes,
  ProductInCart
} from "./types";

/*
 Cart is a hashmap, store should ideally be normalised.
 We aren't dealing with a huge amount of products, and a cart is unlikely to be that big
 But I felt it was important to demonstrate this.
*/
const initialState: CartState = {
  cart: {}
};

export function cartReducer(
  state = initialState,
  action: CartActionTypes
): CartState {
  switch (action.type) {
    case ADD_PRODUCT:
      const cart = addProductToCart(state, action.payload);

      return {
        cart
      };
    default:
      return state;
  }
}

// future proofing, maybe overkill
const cartSelector = ({ cart }: CartState) => cart;

export const productsInCartSelector = (state: CartState): ProductInCart[] => {
  const cart = cartSelector(state);
  return Object.values(cart);
}

// In our data set we were told products array is left as is, so i'm assuming uniqueness on name and not adding ids
const productSelector = ( cart: CartType, product: Product): ProductInCart | undefined => cart[product.name] || undefined;

const addProductToCart = (state: CartState, product: Product): CartType => {
  const cart = cartSelector(state);
  let productInCart = productSelector(cart, product);

  if (productInCart === undefined) {
    productInCart = {
      ...product,
      count: 1,
    }
  } else {
    productInCart.count += 1;
  }

  return {
    ...cart,
    [productInCart.name]: productInCart
  }
}
