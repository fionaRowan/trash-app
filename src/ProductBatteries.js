import React, { Component } from 'react';
import Product from './Product';

class ProductBatteries extends Component {
  render() {
    return (
        <Product
            name='Batteries'
            imageSrc='http://via.placeholder.com/600x250?text=Placeholder'
          />
    )
  }
}

export default ProductBatteries;