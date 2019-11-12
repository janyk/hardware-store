import React from 'react';
import { connect } from "react-redux";
import { AppState } from '../../store';
import { ProductInCart, PURCHASE_CART_FAILED } from '../../store/cart/types';
import { removeProduct } from '../../store/cart/actions';
import { thunkPurchaseCart } from '../../thunks';
import { productsInCartSelector } from '../../store/cart/reducers';
import { Button } from '../../components/button';
import numberToMoney from '../../helpers/numberToMoney';

interface ProductListProps {
  productsInCart: ProductInCart[];
  removeProduct: Function;
  buyNow: Function;
  purchaseProcessing: boolean;
  purchaseFailed: boolean;
  purchaseCartSuccess: boolean;
}

const calculateTotal = (products: ProductInCart[]) =>
  products
  .map(({ price, count }: ProductInCart) => (price * count))
  .reduce((previous, current) => previous + current);

const Cart: React.FC<ProductListProps> = ({ productsInCart = [], removeProduct, buyNow, purchaseCartSuccess, purchaseFailed, purchaseProcessing }) => {
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
        <div className="row">
        <h2>Total: {numberToMoney(total)}</h2>
        {purchaseProcessing && 
          <Button
            text={'Processing..'}
            action={() => {}}
          />
        }
        {purchaseFailed && 
          <Button
          text={'Failed, try again?'}
          action={() => buyNow()}
          />
          
        }
        {purchaseCartSuccess && <div>Success!</div>}
        {!purchaseFailed && !purchaseProcessing && !purchaseCartSuccess &&
          <Button
              text={'Buy now!'}
              action={() => buyNow()}
              />
            }
        </div>        
      </div>
    </div>
  );
}

// ignore laziness of not using selectors for everything
const mapStateToProps = (state: AppState) => ({
  productsInCart: productsInCartSelector(state.cart),
  purchaseProcessing: state.cart.purchaseCartProcessing,
  purchaseFailed: state.cart.purchaseCartFailed,
  purchaseCartSuccess: state.cart.purchaseCartSuccess
})

const mapDispatchToProps = ({
  removeProduct,
  buyNow: thunkPurchaseCart
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
