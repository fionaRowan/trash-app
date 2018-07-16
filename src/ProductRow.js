import React, { Component } from 'react';
const PropTypes = require('prop-types');

class ProductRow extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
    }

  render() {
    return (
        <div className="ProductRow">
         {this.props.children}
        </div>
    )
  }
}

export default ProductRow;