import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { thunkLoadProducts } from '../../thunks/index';
import { clearCartStatus } from '../../store/cart/actions';


import ProductList from '../products-list/product-list-with-ftue';
import Cart from '../cart';
import Outlet from '../../components/outlet';

interface DefaultLayoutProps {
  loadProducts: Function;
  clearCartStatus: Function;
}

const bootstrapApp = ({ loadProducts, clearCartStatus }: DefaultLayoutProps) => {
  loadProducts();
  clearCartStatus();
}

function DefaultLayout(props: DefaultLayoutProps) {
  useEffect(() => bootstrapApp(props));

  return (
    <div className="parent">
      <ProductList />
      <Outlet />
      <Cart />
    </div>
  );
  
}

const mapDispatchToProps = ({
  loadProducts: thunkLoadProducts,
  clearCartStatus
});

export default connect(
  null,
  mapDispatchToProps,
)(DefaultLayout);


