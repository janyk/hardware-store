import { createSelector } from 'reselect';
import { Product } from '../products/types';
import {
  CartType,
  CartState,
  ADD_PRODUCT,
  CartActionTypes,
  ProductInCart,
  REMOVE_PRODUCT,
  PURCHASE_CART_STARTED,
  PURCHASE_CART_FAILED,
  PURCHASE_CART_SUCCESS,
  PURCHASE_CART_CLEAR
} from "./types";

/*
 Cart is a hashmap as stores should usually be normalised.
 We aren't dealing with a huge amount of products, and a cart is unlikely to be that big
 But I felt it was important to demonstrate this. Maybe makes more sense for products store.
*/
const initialState: CartState = {
  cart: {},
  purchaseCartFailed: false,
  purchaseCartSuccess: false,
  purchaseCartProcessing: false,
};

export function cartReducer(
  state = initialState,
  action: CartActionTypes
): CartState {
  switch (action.type) {
    case ADD_PRODUCT: {
      const cart = addProductToCart(state, action.payload);

      return { ...state, cart };
    }
    case REMOVE_PRODUCT: {
      const cart = removeProductFromCart(state, action.payload);

      return { ...state, cart };
    }

    case PURCHASE_CART_STARTED: {

      return { ...state,  purchaseCartProcessing: true, purchaseCartFailed: false, purchaseCartSuccess: false};
    }

    case PURCHASE_CART_FAILED: {

      return { ...state,  purchaseCartProcessing: false, purchaseCartFailed: true, purchaseCartSuccess: false};
    }
    
    case PURCHASE_CART_SUCCESS: {

      return { ...state, cart: {}, purchaseCartProcessing: false, purchaseCartFailed: false, purchaseCartSuccess: true};
    }
    case PURCHASE_CART_CLEAR: {

      return { ...initialState, cart:  state.cart };
    }
    default:
      return state;
  }
}

// future proofing, maybe overkill
export const cartSelector = ({ cart }: CartState) => cart;

export const productsInCartSelector = createSelector(
  cartSelector,
  cart => Object.values(cart)
)

export const totalSelector = createSelector(
  productsInCartSelector,
  (products: ProductInCart[]) => products
    .map(({ price, count }: ProductInCart) => (price * count))
    .reduce((previous, current) => previous + current, 0)
)

// export const productsInCartSelector = (state: CartState): ProductInCart[] => {
//   const cart = cartSelector(state);
//   // whats wrong with this? hint: reference..
//   return Object.values(cart)
// }

// In our data set we were told products array is left as is, so i'm assuming uniqueness on name and not adding ids
const productSelector = ( cart: CartType, product: Product): ProductInCart | undefined => cart[product.name] || undefined;

/*
  https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns#correct-approach-copying-all-levels-of-nested-data
  Keeping these reducers inline with immutable update patterns, causes them to lose their order
  This creates a kind of janky UX
  When I have time, potentially use Immer or ImmutableJS or another lib to enforce immutability as opposed to me manual spreading every level
  But also, add an order key in the cart to maintain order

*/

const addProductToCart = (state: CartState, product: Product): CartType => {
  const cart = cartSelector(state);
  let productInCart = productSelector(cart, product);
  const count = (productInCart === undefined) ? 1 : productInCart.count + 1;

  return {
    ...cart,
    [product.name]: {
      ...product,
      count
    }
  }
}


const removeProductFromCart = (state: CartState, product: ProductInCart): CartType => {
  const cart = cartSelector(state);
  const { [product.name]: remove, ...cartWithoutProduct } = cart;

  let newCart: CartType = {
    ...cartWithoutProduct,
  };

  if (product.count > 1) {
    newCart = {
      ...newCart,
      [product.name]: {
        ...product,
        count: product.count - 1
      }
    }
  }

  return newCart;
}
