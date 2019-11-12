import React from 'react';
import { connect } from "react-redux";
import { AppState } from '../../store';
import { Product } from '../../store/products/types';
import { addProduct } from '../../store/cart/actions';
import { setFTUEComplete } from '../../store/ux/actions';
import { productsSelector } from '../../store/products/reducer';
import { Button } from '../../components/button';
import numberToMoney from '../../helpers/numberToMoney';

interface ProductListProps {
  products: Product[];
  addProduct: Function;
  setFTUEComplete?: Function;
}

const ProductList: React.FC<ProductListProps> = ({ products = [], addProduct, setFTUEComplete }) => {
  return (
    <div className="col-md-3">
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product, i) => (
          <div className="product-item" key={i}>
            <h3>{product.name}</h3>
            <p>Price: {numberToMoney(product.price)}</p>
            <Button
              text={`Add ${product.name} to cart`}
              // potentially expensive as it creates an anonymous function for every item
              action={() => {
                addProduct(product)
              }
            }
              />
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  products: productsSelector(state.products),
})

const mapDispatchToProps = ({
  addProduct,
  setFTUEComplete,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
