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

const Cart: React.FC<ProductListProps> = ({ productsInCart = [], removeProduct }) => {
  const total = (productsInCart.length > 0) ? calculateTotal(productsInCart) : 0;

  return (
    <div className="cart col-md-3">
      <h1>Cart</h1>
      <div className="cart-list">
        {productsInCart.map((product, i) => (
          <div className="cart-item" key={i}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.count} </p>
            <p>Total: {numberToMoney(product.price * product.count)}</p>
            <Button
              text={`Remove ${product.name} from cart`}
              action={() => removeProduct(product)}
              />
          </div>
        ))}
      </div>
      <div className="total">
        <h2>Total: {numberToMoney(total)}</h2>
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
