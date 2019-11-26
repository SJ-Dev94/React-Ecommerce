import React from 'react'
import ReactDOM from 'react-dom'
import Cart from '../Cart/Cart.js'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Navbar, Nav, Dropdown, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap'


class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {}
    };
  }




  render() {
    const navContentStyles = {
      marginLeft: '1.2%'
    }
    const logoStyling = {
      height: '50px',
      width: '50px',
      marginLeft: '1.3%'
    }

    const navFormStyles = {
      marginRight: '1.2%'
    }
    return <div className='message-box'>
      <Navbar>
        <img style={logoStyling} src='http://www.uniqlo.com/custom/img/uniJp.svg' />
        <img style={logoStyling} src='http://www.uniqlo.com/custom/img/uniEn.svg' />
        <Nav className="mr-auto">
          <Nav.Link href="#home">Women</Nav.Link>
          <Nav.Link href="#features">Men</Nav.Link>
          <Nav.Link href="#pricing">Kids</Nav.Link>
        </Nav>
        <Form style={navFormStyles} inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <NavDropdown title="Cart" id="basic-nav-dropdown">
            <Cart
              checkout={this.state.checkout}
              isCartOpen={this.state.isCartOpen}
              handleCartClose={this.handleCartClose}
              updateQuantityInCart={this.updateQuantityInCart}
              removeLineItemInCart={this.removeLineItemInCart}
            />
          </NavDropdown>
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
      <br></br>
    </div >
  }
}

export default Header;