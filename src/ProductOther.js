import React, { Component } from 'react';
import Product from './Product';

class ProductOther extends Component {
  render() {
    return (
        <Product
            name='Other'
            imageSrc='https://iconstore.co/wp-content/uploads/2016/02/love-featured.png'
          />
    )
  }
}

export default ProductOther;