import React, { Component } from 'react';
import Product from './Product';

class ProductPaint extends Component {
  render() {
    return (
        <Product
            name='Paint'
            imageSrc='http://via.placeholder.com/600x250?text=Placeholder'
          />
    )
  }
}

export default ProductPaint;