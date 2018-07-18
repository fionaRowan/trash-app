import React, { Component } from 'react';
import Product from './Product';

class ProductOther extends Component {
  render() {
    return (
        <Product
            name='Other'
            imageSrc='http://via.placeholder.com/600x250?text=Placeholder'
          />
    )
  }
}

export default ProductOther;