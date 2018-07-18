import React, { Component } from 'react';
import Product from './Product';

class ProductLightbulbs extends Component {
  render() {
    return (
        <Product
            name='Lightbulbs'
            imageSrc='http://via.placeholder.com/600x250?text=Placeholder'
          />
    )
  }
}

export default ProductLightbulbs;