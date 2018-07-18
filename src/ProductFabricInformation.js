import React, { Component } from 'react';

class ProductFabricInformation extends Component {
  render() {
    return (
    	<div>
    		<h1>Wearable:</h1>
            <div>
                Donate, i.e. <a href="https://www.grownyc.org/clothing?gclid=EAIaIQobChMI5fzCs62m3AIVlo7ICh2QAAR-EAAYAiAAEgJ7FvD_BwE">here</a>.
                Or sell to a thrift store
            </div>

            <h1>Scraps:</h1>
            <div>
                Donate to <a href="https://earth911.com/home-garden/10-items-to-donate-to-animal-shelters/">animal shelter.</a> Animal shelters also accept:
                <ul className="list">
                    <li>Empty toilet paper rolls</li>
                    <li>Pens and markers</li>
                    <li>Plastic bags</li>
                    <li>Towels and blankets</li>
                    <li>Heating pads / electric blankets</li>
                    <li>Cars</li>
                </ul>
            </div>
    	</div> 
    )
  }
}

export default ProductFabricInformation;