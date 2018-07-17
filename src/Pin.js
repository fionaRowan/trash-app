import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet';

const ITEM_TYPES = {
  COMPOST: 'compost',
  RECYCLING: 'recycling',
  ELECTRONICS: 'electronics',
}

class Pin extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Marker position={this.props.position}>
        <Popup>
          <span>hello i am a popup</span>
        </Popup>
      </Marker>
    );
  }
}

export default Pin;