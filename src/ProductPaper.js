import React, { Component } from 'react';
import Product from './Product';

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