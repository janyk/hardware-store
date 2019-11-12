import React from 'react';
import { connect } from "react-redux";
import { thunkLoadProducts } from '../../thunks/index';
import { clearCartStatus } from '../../store/cart/actions';


import ProductList from '../products-list/product-list-with-ftue';
import Cart from '../cart';
import Outlet from '../../components/outlet';

interface AppProps {
  loadProducts: Function;
  clearCartStatus: Function;
}

class DefaultLayout extends React.Component<AppProps> {

  componentDidMount() {
    // would want to do this after store creation but maybe not using reacts lifecycle hooks?
    this.props.loadProducts();
    this.props.clearCartStatus();
  }

  render() {
    return (
      <div className="parent">
        <ProductList />
        <Outlet />
        <Cart />
      </div>
    );
  }
}

const mapDispatchToProps = ({
  loadProducts: thunkLoadProducts,
  clearCartStatus
});

export default connect(
  null,
  mapDispatchToProps,
)(DefaultLayout);
