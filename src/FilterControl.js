import React, { Component } from 'react';
import FilterOption from './FilterOption';
const PropTypes = require('prop-types');

export default class FilterControl extends Component { 
  static propTypes = {
      onFilterOptionClick: PropTypes.func.isRequired,
      filters: PropTypes.object,
  }

  render() {
    return (
      <div className="legend">
        <FilterOption onClick={this.props.onFilterOptionClick} checked={this.props.filters.recycling} name="recycling" />
        <FilterOption onClick={this.props.onFilterOptionClick} checked={this.props.filters.compost} name="compost" />
        <FilterOption onClick={this.props.onFilterOptionClick} checked={this.props.filters.electronics} name="electronics" />
      </div>
    )
  }
}