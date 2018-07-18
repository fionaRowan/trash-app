import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductElectronicsInformation extends Component {
  render() {
    return (
    	<div>
    		<h1>Small appliances:</h1>
            <div>
                Small appliances, such as a toaster oven or hairdryer, can be recycled with plastics 
                and metals. You must first remove all batteries.
            </div>

    		<div>
    			<Link to={'/map/recycling'}>See recycling locations</Link>
    		</div>

            <h1>Big appliances:</h1>
            <div>
                Before you get rid of larger appliances, including refrigerators and air conditioners, 
                you must set up an appointment with the Department of Sanitation so that the CFC, or 
                Freon, gas can be removed. You can do this online at nyc.gov/dsny or by calling 311. 
                You will then be able to recycle the appliance with other plastics. For refrigerators 
                and freezers, the locking device or hinges must be removed before placing it outside 
                to be picked up.
            </div>

            <h1>Electronics:</h1>
            <div>
                Electronics, such as computers, televisions, cellphones, power tools, electric razors 
                and cameras, cannot be thrown away or recycled. They should be taken back to the 
                retailers, which are required to accept them. They can also be taken to a SAFE 
                Disposal Event or Household Special Waste Drop-Off Site.
            </div>

            <div>
                <Link to={'/map/electronics'}>See electronics dropoff locations</Link>
            </div>
    	</div> 
    )
  }
}

export default ProductElectronicsInformation;