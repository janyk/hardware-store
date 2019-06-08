import { Product } from '../../store/products/types';
import { IProductsService } from './definitions';
import { sleep } from '../helpers/sleep';
import { products } from './_fixtures_/products';

export class ProductsService implements IProductsService {

  public async getAll(): Promise<Product[]> {
    await sleep(1800);
    return products;
  }
}
