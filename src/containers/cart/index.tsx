import React from 'react';
import { connect } from "react-redux";
import { AppState } from '../../store';
import { ProductInCart } from '../../store/cart/types';
import { removeProduct } from '../../store/cart/actions';
import { productsInCartSelector } from '../../store/cart/reducers';
import { Button } from '../../components/button';
import numberToMoney from '../../helpers/numberToMoney';

interface ProductListProps {
  productsInCart: ProductInCart[];
  removeProduct: Function;
}

const calculateTotal = (products: ProductInCart[]) =>
  products
  .map(({ price, count }: ProductInCart) => (price * count))
  .reduce((previous, current) => previous + current);

const Cart: React.FC<ProductListProps> = ({ productsInCart, removeProduct }) => {
  return (
    <div className="product-list">
      <h1>Cart</h1>
      {productsInCart.map((product, i) => (
        <div className="message-item" key={i}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.count} </p>
          <p>Total: {numberToMoney(product.price * product.count)}</p>
          <Button
            text={`Remove ${product.name} from cart`}
            // potentially expensive as it creates an anonymous function for every item
            action={() => removeProduct(product)}
            />
        </div>
      ))}
      <div>
        <h2>Total: {numberToMoney(calculateTotal(productsInCart))}</h2>
      </div>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  productsInCart: productsInCartSelector(state.cart),
})

const mapDispatchToProps = ({
  removeProduct
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
