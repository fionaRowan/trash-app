import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet';

const ITEM_TYPES = {
  COMPOST: 'compost',
  RECYCLING: 'recycling',
  ELECTRONICS: 'electronics',
}

class Pin extends Component {

  getLocationLink() {
    return "http://maps.google.com/maps?q=" + this.props.position[0] + "," + this.props.position[1];
  }

  render() {
    let popupText = '';
    switch(this.props.type) {
      case ITEM_TYPES.COMPOST:
        popupText = 'Food scraps drop off point.';
        break;
      case ITEM_TYPES.RECYCLING:
        popupText = 'Public Recycling.';
        break;
      case ITEM_TYPES.ELECTRONICS:
        popupText = 'Electronics drop off point.';
        break;
      default:
        popupText = '';
    }
    return(
      <Marker position={this.props.position}>
        <Popup>
          <div>
          <div>
            <span>{popupText}</span>
            <label>{' '}Enter a number to receive this location.{' '}</label>
            <input id="number" type="text" name="text"/>
          </div>
          <div>
            <input type="submit" value="Send" onClick={() => this.props.textClient(document.getElementById('number').value, this.getLocationLink())}/>
          </div>
          </div>
        </Popup>
      </Marker>
    );
  }
}

export default Pin;