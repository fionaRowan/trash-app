import React, { Component } from 'react';
import Product from './Product';

class ProductToothpaste extends Component {
  render() {
    return (
        <Product
            name='Toothpaste'
            imageSrc='http://via.placeholder.com/600x250?text=Placeholder'
          />
    )
  }
}

export default ProductToothpaste;