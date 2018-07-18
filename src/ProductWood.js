import React, { Component } from 'react';
import Product from './Product';

class ProductWood extends Component {
  render() {
    return (
        <Product
            name='Wood'
            imageSrc='http://via.placeholder.com/600x250?text=Placeholder'
          />
    )
  }
}

export default ProductWood;