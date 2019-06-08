import React from 'react';
import { connect } from "react-redux";
import { thunkLoadProducts } from '../../thunks/index';
import ProductList from '../products-list'
import Outlet from '../../components/outlet';

interface AppProps {
  loadProducts: Function;
}

class DefaultLayout extends React.Component<AppProps> {

  componentDidMount() {
    // would want to do this after store creation but maybe not using reacts lifecycle hooks?
    this.props.loadProducts();
  }

  render() {
    return (
      <div className="parent">
        <ProductList />
        <Outlet />
      </div>
    );
  }
}

const mapDispatchToProps = ({
  loadProducts: thunkLoadProducts,
});

export default connect(
  null,
  mapDispatchToProps,
)(DefaultLayout);
