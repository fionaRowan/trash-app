import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductPlasticInformation extends Component {
  render() {
    return (
    	<div>
    		<h1>Accepted materials:</h1>
    		<ul className="list">
                <li>Soda cans, food cans, spray paint bottles </li>
                <li>Plastic bottles and plastic food containers</li>
                <li>Plastic silverware</li>
                <li>Plastic toys </li>
                <li>Glass bottles and jars (these are the only glass items accepted) </li>
                <li>Milk, Juice and other liquid cartons</li>
                <li>Aluminum foil</li>
                <li>Pots and Pans</li>
                <li>Wire or plastic hangers</li>
                <li>Keys</li>
                <li>Metal furniture (chairs, filing cabinets)</li>
    		</ul> 

    		<div>
    			<Link to={'/map/recycling'}>See recycling locations</Link>
    		</div>

    		<h1>Unaccepted materials:</h1>
    		<ul className="list">
                <li>Batteries</li>
                <li>Plastic bags (take to Grocery store)</li>
                <li>Squeeze tubs and pouches (i.e. Capri sun)</li>
                <li>Plastic foam</li>
                <li>Printer cartridges (take to STAPLES)</li>
                <li>Glass items other than glass bottles and jars (such as mirrors, light bulbs, ceramics, and glassware)</li>
                <li>Window blinds</li>
                <li>Foam plastic items (such as foam food service containers, cups and trays, foam protective packing blocks, and, and foam packing peanuts)</li>
                <li>Flexible plastic items (such as single-serve food and drink squeezable pouches and tubes such as toothpaste, lotion, cosmetics, or sports balls such as basketballs, bowling balls, soccer balls, footballs, yoga balls)</li>
                <li>Film plastic (such as plastic shopping bags and wrappers.) Bring plastic bags and film to participating stores for recycling</li>
                <li>Cigarette lighters and butane gas lighters</li>
                <li>Cassette and VHS tapes</li>
                <li>Pens and markers (donate to animal shelter)</li>
                <li>“Tanglers” (such as cables, wires, cords, hoses)</li>
                <li>Rigid plastic containers containing medical “sharps” or disposable razors</li>
                <li>Containers that held dangerous or corrosive chemicals</li>
    		</ul>
    	</div> 
    )
  }
}

export default ProductPlasticInformation;