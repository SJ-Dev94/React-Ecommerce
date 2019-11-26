import React from "react";
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gql from 'graphql-tag';

class LandingIndex extends React.Component {


  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Landing!</h1>
          </Col>
        </Row>
      </Container>
    )
  }

}


export default LandingIndex;