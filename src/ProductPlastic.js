import React, { Component } from 'react';
import Product from './Product';

class ProductPlastic extends Component {
  render() {
    return (
        <Product
            name='Plastic'
            imageSrc='http://via.placeholder.com/600x250?text=Placeholder'
          />
    )
  }
}

export default ProductPlastic;