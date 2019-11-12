import { Action, compose } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../store";
import { Product } from "../store/products/types";
import { loadProducts } from "../store/products/actions";
import { startCartPurchase, cartPurchaseFailed, cartPurchaseSuccess } from "../store/cart/actions";
import { ProductsService } from '../services/products'
import { productsInCartSelector, cartSelector } from "../store/cart/reducers";
import { sleep } from "../services/helpers/sleep";

export const thunkLoadProducts = (
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  const productService = new ProductsService();
  const products: Product[] = await productService.getAll();

  dispatch(
    loadProducts(products)
  );
};


export const thunkPurchaseCart = (
  ): ThunkAction<void, AppState, null, Action<string>> => async (dispatch, getState) => {
    dispatch(
      startCartPurchase()
    );
    // further reading: https://redux.js.org/api/compose
    const getProductsInCart = compose(
      productsInCartSelector,
      cartSelector,
      () => getState()
    ) as () => Product[];
    
    const productsInCart = getProductsInCart();

    try {
      const success = await fakeApi(productsInCart);
      dispatch(
        cartPurchaseSuccess()
      );
    } catch (e) {
      dispatch(
        cartPurchaseFailed()
      )
    }
  };


  const fakeApi = async (products: Product[]): Promise<boolean> => {
    await sleep(1800);
    if (Math.random() * 3 > 1) {
      return true
    }

    throw new Error('API Call Failed')
  }