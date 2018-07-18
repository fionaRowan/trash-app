import React, { Component } from 'react';
const PropTypes = require('prop-types');

class FilterOption extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
	}

	onChange() {
     this.props.onClick(this.props.name);
   }

   render() {
   	return (
   		<div>
     		<input onChange={() => this.onChange()} type="checkbox" name={this.props.name}
     		value={this.props.name} checked={this.props.checked} />
     		<label>{this.props.name}</label>
   		</div>
   		)
   	}
   }
   export default FilterOption;