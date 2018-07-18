import React, { Component } from 'react';
import Product from './Product';

class ProductFood extends Component {
  render() {
    return (
        <Product
           name='Food'
           imageSrc='https://iconstore.co/wp-content/uploads/2017/03/pizza-icons-featured.png'
         />
    )
  }
}

export default ProductFood;