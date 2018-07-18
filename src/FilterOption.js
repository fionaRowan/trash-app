import React, { Component } from 'react';
const PropTypes = require('prop-types');

class FilterOption extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired,
	}
	state = {
		checked: false,
	}

	onChange() {
     this.setState({checked: !this.state.checked});
     this.props.onClick(this.props.name);
   }

   render() {
   	return (
   		<div>
     		<input onChange={() => this.onChange()} type="checkbox" name={this.props.name}
     		value={this.props.name} checked={this.state.checked} />
     		<label>{this.props.name}</label>
   		</div>
   		)
   	}
   }
   export default FilterOption;