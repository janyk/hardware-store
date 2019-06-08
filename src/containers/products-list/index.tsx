import React from 'react';
import { connect } from "react-redux";
import { AppState } from '../../store';
import { Product } from '../../store/products/types';
import { addProduct } from '../../store/cart/actions';
import { productsSelector } from '../../store/products/reducers';
import { Button } from '../../components/button';
import numberToMoney from '../../helpers/numberToMoney';

interface ProductListProps {
  products: Product[];
  addProduct: Function;
}

const ProductList: React.FC<ProductListProps> = ({ products = [], addProduct }) => {
  return (
    <div className="product-list">
      <h1>Products</h1>
      {products.map((product, i) => (
        <div className="message-item" key={i}>
          <h3>{product.name}</h3>
          <p>Price: {numberToMoney(product.price)}</p>
          <Button
            text={`Add ${product.name} to cart`}
            // potentially expensive as it creates an anonymous function for every item
            action={() => addProduct(product)}
            />
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  products: productsSelector(state.products),
})

const mapDispatchToProps = ({
  addProduct
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
