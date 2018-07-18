import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductFoodInformation extends Component {
  render() {
    return (
    	<div>
    		<h1>Accepted materials:</h1>
    		<ul className="list">
	    		<li>fruit and vegetable scraps</li>
	    		<li>non-greasy food scraps (rice, pasta, bread, cereal etc.)</li>
	    		<li>coffee grounds & filters</li>
	    		<li>tea bags</li>
	    		<li>egg and nut shells</li>
	    		<li>pits</li>
	    		<li>cut or dried flowers</li>
	    		<li>house plants and potting soil</li>
    		</ul> 

    		<div>
    			<Link to={'/map/compost'}>See compost locations</Link>
    		</div>

    		<h1>Unaccepted materials:</h1>
    		<ul className="list">
    			<li>meat, chicken, fish</li>
    			<li>greasy food scraps</li>
    			<li>fat, oil, dairy</li>
    			<li>animal waste, litter or bedding</li>
    			<li>coal or charcoal</li>
    			<li>coconuts</li>
    			<li>diseased and/or insect-infested 
    		houseplants/soil</li>
    			<li>biodegradable/compostable plastics</li>
    		</ul>

    		Throw these in the trash.
    	</div> 
    )
  }
}

export default ProductFoodInformation;