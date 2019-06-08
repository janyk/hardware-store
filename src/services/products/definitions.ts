import { Product } from '../../store/products/types'
export interface IProductsService {
  getAll(): Promise<Product[]>;
}
