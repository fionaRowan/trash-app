import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';
import Pin from './Pin';
import FilterControl from './FilterControl';

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/';

class SimpleMap extends Component {

  constructor(props) {
    super(props)
    this.state = {
      lat: 40.7128,
      lng: -74.0060,
      zoom: 13,
      pins: [],
    }

    this.getRecyclingMarkers();
  }

  getRecyclingMarkers() {
    const db = this.props.client.service('mongodb', 'mongodb-atlas').db('recycling');
    const pinsCollection = db.collection('pins');
    pinsCollection.find().execute().then(
      docs => {
        const pins = [];
        docs.forEach(
          doc => {
            if (doc.latitude && doc.longitude) {
              const position = [parseFloat(doc.latitude), parseFloat(doc.longitude)];              
              pins.push(<Pin position={position} key={doc._id} type={doc.item_type}/>)
            }
          }
        );
        this.setState({ pins });
      }
    );
  }

  render() {
    let authed = !!this.props.client.authedId()
    if (!authed) {
      return <div></div>;
    }
    const position = [this.state.lat, this.state.lng]
    return (
      <React.Fragment>
        <Map center={position} zoom={this.state.zoom}>
          <FilterControl/>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <React.Fragment>
            {this.state.pins}
          </React.Fragment>
        </Map>
      </React.Fragment>
    )
  }
}

export default SimpleMap;