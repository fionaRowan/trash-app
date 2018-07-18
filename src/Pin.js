import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const ITEM_TYPES = {
  COMPOST: 'compost',
  RECYCLING: 'recycling',
  ELECTRONICS: 'electronics',
}

const IMAGES = {
  COMPOST: 'https://cdn.iconscout.com/public/images/icon/premium/png-512/smart-compost-plant-less-fertilize-harm-harmful-367fe1d2fd326589-512x512.png',
  RECYCLING: 'https://img.clipartxtras.com/f55c9b906def46701aaff64c8e162176_heart-shaped-earth-clipart-panda-free-clipart-images-earth-heart-clipart_200-193.gif',
  ELECTRONICS: 'https://www.metechrecycling.com/wp-content/uploads/2015/01/recycle-icon3.png',
}

class Pin extends Component {

  getIcon() {
    const { type, position } = this.props;

    let iconUrl = '';
    let iconSize = new L.Point(50, 50);
    switch(type) {
      case ITEM_TYPES.COMPOST:
        iconUrl = IMAGES.COMPOST;
        iconSize = new L.Point(50, 50);
        break;
      case ITEM_TYPES.RECYCLING:
        iconUrl = IMAGES.RECYCLING;
        iconSize = new L.Point(30, 30);
        break;
      case ITEM_TYPES.ELECTRONICS:
        iconUrl = IMAGES.ELECTRONICS;
        iconSize = new L.Point(50, 35);
        break;
      default:
        return; // if not one of our supported types, use default icon
    }

    const icon = new L.icon({
      iconUrl: iconUrl,
      iconRetinaUrl: null,
      iconAnchor: L.Point(position),
      popupAnchor: [0, -15],
      shadowUrl: null,
      shadowSize: null,
      shadowAnchor: null,
      iconSize: iconSize,
      className: `leaflet-${type}-icon`
    });

    return icon;
  }

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

    const customIcon = this.getIcon();
    let props = { position: this.props.position };
    if (customIcon) {
      props.icon = customIcon;
    }

    // const customMarker = L.icon({ iconUrl: 'https://www.denvergov.org/content/dam/denvergov/Portals/709/images/images2017/Chasing%20arrow_compost_WW17_300x300.jpg', })
    // return(
    //   <Marker position={this.props.position} icon={customMarker}>
    //     <Popup>
    //       <span>{popupText}</span>
    //     </Popup>
    //   </Marker>
    // );
    return(
      <Marker {...props}>
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