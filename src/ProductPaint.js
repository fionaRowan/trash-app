import React, { Component } from 'react';
import Product from './Product';

class ProductPaint extends Component {
  render() {
    return (
        <Product
            name='Paint'
            imageSrc='https://iconstore.co/wp-content/uploads/2016/03/great-simple-featured.png'
          />
    )
  }
}

export default ProductPaint;