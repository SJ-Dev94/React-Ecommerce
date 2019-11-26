import React, { Component } from 'react';
import Product from './Product';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class Products extends Component {
  render() {

    let products = this.props.products.map((product) => {
      return (
        <Col xs={4} lg={4} xl={4}>
          <Product
            addVariantToCart={this.props.addVariantToCart}
            client={this.props.client}
            key={product.id.toString()}
            product={product}
          />
        </Col>
      );
    });

    return (
      <div className="Product-wrapper">
        <Row>

          {products}
        </Row>
      </div>
    );
  }
}

export default Products;