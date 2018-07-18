import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet';

const ITEM_TYPES = {
  COMPOST: 'compost',
  RECYCLING: 'recycling',
  ELECTRONICS: 'electronics',
}

class Pin extends Component {
  render() {
    let popupText = '';
    switch(this.props.type) {
      case ITEM_TYPES.COMPOST:
        popupText = 'compost here!!';
        break;
      case ITEM_TYPES.RECYCLING:
        popupText = 'recycle here!!';
        break;
      case ITEM_TYPES.ELECTRONICS:
        popupText = 'electronics here!!';
        break;
      default:
        popupText = '';
    }
    return(
      <Marker position={this.props.position}>
        <Popup>
          <span>{popupText}</span>
        </Popup>
      </Marker>
    );
  }
}

export default Pin;