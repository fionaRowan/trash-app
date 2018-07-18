import React, { Component } from 'react';
import FilterOption from './FilterOption';
const PropTypes = require('prop-types');

export default class FilterControl extends Component { 
  static propTypes = {
      onFilterOptionClick: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="legend">
        <FilterOption onClick={this.props.onFilterOptionClick} name="recycling" />
        <FilterOption onClick={this.props.onFilterOptionClick} name="compost" />
        <FilterOption onClick={this.props.onFilterOptionClick} name="electronics" />
      </div>
    )
  }
}