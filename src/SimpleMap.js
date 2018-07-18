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
      zoom: 13,
      pins: [],
      lat: 40.7128,
      lng: -74.0060,
      filters: {
        recycling: false, 
        compost: false,
        electronics: false,
      },
    }

    if(!!this.props.client.authedId()) {
      this.getRecyclingMarkers();
    }

  }

  onFilterOptionClick (item_type) {
    const oldFilters = this.state.filters;
    oldFilters[item_type] = !oldFilters[item_type];
    this.setState({filters: oldFilters});
    this.getRecyclingMarkers();
  }

  getRecyclingMarkers() {
    const db = this.props.client.service('mongodb', 'mongodb-atlas').db('recycling');
    // this.props.client.executeFunction("sendLocation").then(response => console.log(response));
    const pinsCollection = db.collection('pins');
    const filters = [];
    if(this.state.filters.recycling) {filters.push('recycling');}
    if(this.state.filters.compost) {filters.push('compost');}
    if(this.state.filters.electronics) {filters.push('electronics');}
    pinsCollection.find({'item_type': {'$in': filters}}).execute().then(
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
      <div>
      <FilterControl onFilterOptionClick={(...args) => this.onFilterOptionClick(...args)}/>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <React.Fragment>
            {this.state.pins}
          </React.Fragment>
        </Map>
        </div>
    )
  }
}

export default SimpleMap;