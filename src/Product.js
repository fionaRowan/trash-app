import React, { Component } from 'react';
import { Card, ImageHeader, CardFooter } from "react-simple-card";
const PropTypes = require('prop-types');

class Product extends Component {
    static propTypes = {
      name: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    }

  render() {
    return (
        <div className="Product">
         <Card>
            <ImageHeader imageSrc={this.props.imageSrc}/>
            <CardFooter>{this.props.name}</CardFooter>
         </Card>
        </div>
    )
  }
}

export default Product;