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

export default function SalesHeader() {


  const SalesHeaderStyles = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'red',
    marginTop: '-1.5rem',
    marginBottom: '1.8rem',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const SalesButtonStyling = {
    height: '25%',
    width: '10em',
    backgroundColor: 'Transparent',
    marginLeft: '1.75%',
    border: '2.5px solid #FFF',
    paddingTop: '.3em',
    paddingBottom: '.3em',
    borderRadius: '0px',
    color: '#FFF',
  }

  const SalesTextStyling = {
    marginTop: '1.75%',

    color: '#FFF',
    fontSize: '1.6rem',
    letterSpacing: '1.5px'
  }
  return (
    <div style={SalesHeaderStyles}>
      <p style={SalesTextStyling}><strong>Shop Fall Styles While Supplies Last!</strong></p>
      <button size="small" style={SalesButtonStyling}><strong>Men's</strong></button>
      <button style={SalesButtonStyling}><strong>Women's</strong></button>
    </div>
  )
}