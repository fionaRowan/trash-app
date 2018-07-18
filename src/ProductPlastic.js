import React, { Component } from 'react';
import Product from './Product';

class ProductPlastic extends Component {
  render() {
    return (
        <Product
            name='Plastic'
            imageSrc='https://iconstore.co/wp-content/uploads/2016/01/bottles-featured.png'
          />
    )
  }
}

export default ProductPlastic;