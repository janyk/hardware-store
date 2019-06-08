import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../store";
import { Product } from "../store/products/types";
import { loadProducts } from "../store/products/actions";
import { ProductsService } from '../services/products'

export const thunkLoadProducts = (
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  const productService = new ProductsService();
  const products: Product[] = await productService.getAll();

  dispatch(
    loadProducts(products)
  );
};
