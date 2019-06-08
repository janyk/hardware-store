import {
  ProductState,
  LOAD_PRODUCTS,
  ProductActionTypes
} from "./types";

const initialState: ProductState = {
  products: []
};

export function productsReducer(
  state = initialState,
  action: ProductActionTypes
): ProductState {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        // assumption being products returned from services are the only ones for sale
        products: [ ...action.payload ]
      };
    default:
      return state;
  }
}
