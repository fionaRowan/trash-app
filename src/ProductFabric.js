import React, { Component } from 'react';
import Product from './Product';

class ProductFabric extends Component {
  render() {
    return (
        <Product
            name='Fabric'
            imageSrc='https://iconstore.co/wp-content/uploads/2016/04/casual-wear-featured.png'
          />
    )
  }
}

export default ProductFabric;