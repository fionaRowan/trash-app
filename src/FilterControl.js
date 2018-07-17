import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import { MapControl } from 'react-leaflet';

export default class CenterControl extends MapControl { 

  componentWillMount() {
    const centerControl = L.control({position: 'topleft'});
    const jsx = (
      <div {...this.props}>
         hello
      </div>
    );

    centerControl.onAdd = function (map) {
      let div = L.DomUtil.create('div', '');
      ReactDOM.render(jsx, div);
      return div;
    };

    this.leafletElement = centerControl;
  }
}