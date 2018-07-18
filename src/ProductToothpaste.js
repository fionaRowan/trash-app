import React, { Component } from 'react';
import Product from './Product';

class ProductToothpaste extends Component {
  render() {
    return (
        <Product
            name='Toothpaste'
            imageSrc='https://iconstore.co/wp-content/uploads/2016/09/medical-icons-featured.png'
          />
    )
  }
}

export default ProductToothpaste;