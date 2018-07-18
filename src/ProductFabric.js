import React, { Component } from 'react';
import Product from './Product';

class ProductFabric extends Component {
  render() {
    return (
        <Product
            name='Fabric'
            imageSrc='http://via.placeholder.com/600x250?text=Placeholder'
          />
    )
  }
}

export default ProductFabric;