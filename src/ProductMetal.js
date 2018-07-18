import React, { Component } from 'react';
import Product from './Product';

class ProductMetal extends Component {
  render() {
    return (
        <Product
            name='Metal'
            imageSrc='https://iconstore.co/wp-content/uploads/2018/03/education-featured.png'
          />
    )
  }
}

export default ProductMetal;