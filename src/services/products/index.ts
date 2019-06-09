import { Product } from '../../store/products/types';
import { IProductsService } from './definitions';
import { sleep } from '../helpers/sleep';
import { products } from './_fixtures_/products';

type ProductApiResponse = {
  data: Product[]
}

export class ProductsService implements IProductsService {

  public async getAll(): Promise<Product[]> {
    console.log(process.env.REACT_APP_USE_API)
    if (process.env.REACT_APP_USE_API === 'true') {
      debugger;
      return fetch('https://us-central1-semiotic-creek-243111.cloudfunctions.net/http')
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<{ data: ProductApiResponse }>
      })
      .then((data)  => {
        return data.data.data
      });
    } else {
      await sleep(1800);
      return products;
    }
  }
}
