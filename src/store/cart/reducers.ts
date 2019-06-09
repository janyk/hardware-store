import { Product } from '../products/types';
import {
  CartType,
  CartState,
  ADD_PRODUCT,
  CartActionTypes,
  ProductInCart,
  REMOVE_PRODUCT
} from "./types";

/*
 Cart is a hashmap as stores should usually be normalised.
 We aren't dealing with a huge amount of products, and a cart is unlikely to be that big
 But I felt it was important to demonstrate this. Maybe makes more sense for products store.
*/
const initialState: CartState = {
  cart: {}
};

export function cartReducer(
  state = initialState,
  action: CartActionTypes
): CartState {
  switch (action.type) {
    case ADD_PRODUCT: {
      const cart = addProductToCart(state, action.payload);

      return { cart };
    }
    case REMOVE_PRODUCT: {
      const cart = removeProductFromCart(state, action.payload);

      return { cart };
    }
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
