import * as actions from './actions'
import * as types from './types'
import { products } from './__fixtures__';

describe('actions', () => {
  it('should create an action to load the products', () => {
    const expectedAction = {
      type: types.LOAD_PRODUCTS,
      payload: products
    }
    expect(actions.loadProducts(products)).toEqual(expectedAction)
  })
})
