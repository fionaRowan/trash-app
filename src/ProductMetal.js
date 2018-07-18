import React, { Component } from 'react';
import Product from './Product';

class ProductMetal extends Component {
  render() {
    return (
        <Product
            name='Metal'
            imageSrc='http://via.placeholder.com/600x250?text=Placeholder'
          />
    )
  }
}

export default ProductMetal;