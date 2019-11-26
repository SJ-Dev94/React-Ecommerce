import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import Badge from 'react-bootstrap/Badge'
import '../../Styles/Carousel.scss'

export default function LandingCarousel() {


  const flexxem = {
    display: 'flex',
    flexDirection: 'row'
  }


  const iframeWrapper = {
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '60%',
  }

  const bottomSpacing = {
    marginBottom: '1.75rem'
  }

  const flexColumn = {
    display: 'flex',
    flexDirection: 'column'
  }

  const carouselMargin = {

  }

  return (

    <Carousel style={bottomSpacing}>
      <Carousel.Item>
        <Card>
          <Row>
            <Col sm={12} md={12} lg={8} xl={8}>
              <Image className="w-100" fluid src="https://image.uniqlo.com//UQ/ST3/us/imagesother/home/191025-fleece25-1000x750-04.jpg?$jpgMQ$&wid=760" />
            </Col>
            <Col>
              <Badge variant="secondary">Uniqlone Favorites</Badge>
              <Card.Text>
                <p>
                  UNIQLONE has been providing the comfort and warmth of fleece since 1994.
                    </p>
                <h5>
                  <strong>
                    Celebrating 25 years!
                      </strong>
                </h5>
                <p>
                  <strong>
                    Fluffy Full-Zip Fleece
                      </strong>
                </p>
                <Button>Men</Button>
                <br />
                <p>
                  <strong>
                    Fluffy Full-Zip Fleece
                      </strong>
                </p>
                <Button>Women</Button>
              </Card.Text>
              <Card.Text>
                <p>Lorem Ipsum Delore de fuck dis shits
                     </p>
              </Card.Text>
            </Col>
          </Row>

        </Card>
      </Carousel.Item>

    </Carousel>


  )
}
