import React, { Component } from 'react';
import Product from './Product';

class ProductElectronics extends Component {
  render() {
    return (
        <Product
            name='Electronics'
            imageSrc='http://via.placeholder.com/600x250?text=Placeholder'
          />
    )
  }
}

export default ProductElectronics;