import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from "redux-devtools-extension";

import persistConfig from './persistConfig';
import { uxReducer } from "./ux/reducers";
import { productsReducer } from "./products/reducer";
import { cartReducer } from "./cart/reducers";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  ux: uxReducer
});


const persistedReducer = persistReducer(persistConfig, rootReducer)

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    persistedReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  let persistor = persistStore(store);

  return  { store, persistor };
}
