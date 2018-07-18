import React, { Component } from 'react';
import Product from './Product';

class ProductPaper extends Component {
  render() {
    return (
        <Product
            name='Paper'
            imageSrc='https://iconstore.co/wp-content/uploads/2016/01/design-featured.png'
          />
    )
  }
}

export default ProductPaper;