import React, { Component } from 'react';
import { Card, ImageHeader, CardBody, CardFooter } from "react-simple-card";
import Product from './Product';
const PropTypes = require('prop-types');

class ProductPaper extends Component {
  render() {
    return (
        <Product
            name='Paper'
            imageSrc='http://via.placeholder.com/600x250?text=Placeholder'
          />
    )
  }
}

export default ProductPaper;