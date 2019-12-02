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

export default function LandingCarouselSmall() {


  const flexxem = {
    display: 'flex',
    flexDirection: 'row'
  }


  const iframeWrapper = {
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '60%',
  }

  const spacing = {
    marginBottom: '1.75rem',
    marginTop: '-2%'
  }

  const flexColumn = {
    display: 'flex',
    flexDirection: 'column'
  }

  const carouselMargin = {

  }

  return (

    <Carousel style={spacing}>
      <Carousel.Item>
        <Row>
          <Col sm={12} md={12} lg={12} xl={12}>
            <Image className="w-100" fluid src="https://image.uniqlo.com//UQ/ST3/us/imagesother/home/191025-fleece25-1000x750-04.jpg?$jpgMQ$&wid=760" />
          </Col>
        </Row>
      </Carousel.Item >

    </Carousel >
  )
}

/* <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={60}
        totalSlides={3}
        style={carouselMargin}
      >
        <Slider>
          <Slide index={0}>




          </Slide>
          <Slide index={1}>
            <iframe class="embed-responsive-item" title="fuck" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
          </Slide>
          <Slide index={2}>
            <iframe class="embed-responsive-item" title="fuck" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
          </Slide>
        </Slider >
      </CarouselProvider >*/