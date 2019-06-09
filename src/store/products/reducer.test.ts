import { productsReducer, initialState } from './reducer'
import * as types  from './types'
import { products } from './__fixtures__';

describe('products reducer', () => {
  it('should handle LOAD_PRODUCTS', () => {
    expect(
      productsReducer(initialState, {
        type: types.LOAD_PRODUCTS,
        payload: products
      })
    ).toEqual(
      {
        products
      }
    )})
})
