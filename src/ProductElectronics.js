import React, { Component } from 'react';
import Product from './Product';

class ProductElectronics extends Component {
  render() {
    return (
        <Product
            name='Electronics'
            imageSrc='https://iconstore.co/wp-content/uploads/2017/06/retro-icons-featured.png'
          />
    )
  }
}

export default ProductElectronics;