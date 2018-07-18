import React, { Component } from 'react';
import { Card, ImageHeader, CardFooter } from "react-simple-card";
import { Link } from 'react-router-dom';
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
            <Link to={'/guide/'+this.props.name}><CardFooter>{this.props.name}</CardFooter></Link>
         </Card>
        </div>
    )
  }
}

export default Product;