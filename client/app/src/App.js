/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
//import { updateWindowSize } from './Redux/actions/windowSizeAction.js'
import Container from 'react-bootstrap/container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import LandingIndex from './Components/Landing/LandingIndex.js'
import Header from './Components/Header/Header.js';
import debounce from 'lodash.debounce';
import 'bootstrap/dist/css/bootstrap.min.css';

import Cart from './Components/Cart/Cart.js'
import Products from './Components/Products/Products.js'
import Product from './Components/Products/Product.js'
import LandingCarousel from './Components/Carousel/Carousel'
import LandingCarouselSmall from './Components/Carousel/CarouselSmall'
import Card from 'react-bootstrap/Card'
import updateWindowSize from './Redux/actions/windowSizeAction.js'
import SalesHeader from './Components/SalesHeader/SalesHeader.js'
import SalesHeaderSmall from './Components/SalesHeader/SalesHeaderSmall.js'
import SalesBody from './Components/SalesBody/SalesBody.js'





class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {},
      Categories: {
        WShirts: 156354740276,
        WPants: 156354510900,
        WJackets: 156354445364,
        MShirts: 156354707508,
        MPants: 156354478132,
        MJackets: 156354347060,
      }
    };
    this.result = [{
      Categories: {
        WShirts: 156354740276,
        WPants: 156354510900,
        WJackets: 156354445364,
        MShirts: 156354707508,
        MPants: 156354478132,
        MJackets: 156354347060,
      }
    }]
    this.handleCartClose = this.handleCartClose.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
  }

  componentWillMount() {

    this.props.updateWindowSize(window.innerWidth);

    window.addEventListener(
      "resize",
      debounce(() => {
        this.props.updateWindowSize(window.innerWidth);
      }, 200)
    );

  }

  addVariantToCart(variantId, quantity) {
    this.setState({
      isCartOpen: true,
    });

    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }]
    const checkoutId = this.state.checkout.id

    return this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = this.state.checkout.id
    const lineItemsToUpdate = [{ id: lineItemId, quantity: parseInt(quantity, 10) }]

    return this.props.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  removeLineItemInCart(lineItemId) {
    const checkoutId = this.state.checkout.id

    return this.props.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false,
    });
  }

  renderCarousel = () => {
    if (this.props.windowSize > 1090) {
      console.log('large screen')
      return <LandingCarousel />;
    } else {
      console.log('small screen')
      return <LandingCarouselSmall />
    }
  }

  renderSalesHeader = () => {
    if (this.props.windowSize > 1090) {
      console.log('large screen')
      return <SalesHeader />;
    } else {
      console.log('small screen')
      return <SalesHeaderSmall />
    }
  }
  render() {
    const bodyStyles = {
      marginLeft: '1.75rem',
      marginRight: '1.75rem',

    }

    const bottomSpacing = {
      paddingBottom: '100px'
    }

    const appStyles = {
      fontFamily: 'Ropa Sans',
      letterSpacing: '1px'

    }

    return (
      <div className="App" style={appStyles}>
        <Header client={this.props.client} />
        <div style={bodyStyles}>
          {this.renderSalesHeader()}
          {this.renderCarousel()}
          <SalesBody />
          <h4>Women's Clothes</h4>

          <Products
            products={this.state.products}
            client={this.props.client}
            addVariantToCart={this.addVariantToCart}
          />

        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { windowSize: state.windowSize };
}


export default connect(mapStateToProps, { updateWindowSize })(App);