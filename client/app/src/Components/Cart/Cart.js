import React, { Component } from 'react';

import LineItem from '../LineItem';


class Cart extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>
        <header className="Cart__header">
          <h2>Your cart</h2>
          <button

            className="Cart__close">
            ×
          </button>
        </header>
        <ul className="Cart__line-items">
        </ul>
        <footer className="Cart__footer">
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Subtotal</div>
            <div className="Cart-info__pricing">
              <span className="pricing"></span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Taxes</div>
            <div className="Cart-info__pricing">

            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Total</div>
            <div className="Cart-info__pricing">

            </div>
          </div>
          <button className="Cart__checkout button">Checkout</button>
        </footer>
      </div>
    )
  }
}

export default Cart;