import React, { Component } from 'react';
import Product from './Product';

class ProductFood extends Component {
  render() {
    return (
        <Product
            name='Food'
            imageSrc='http://via.placeholder.com/600x250?text=Placeholder'
          />
    )
  }
}

export default ProductFood;