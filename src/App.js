import React, { Component } from 'react';
import './App.css';
import { StitchClient } from "mongodb-stitch";
import AuthControls from "./AuthControls";
import SimpleMap from "./SimpleMap";
import ProductMatrix from "./ProductMatrix";
import APP_ID from "./config";

let options = {};
if (process.env.STITCH_URL) {
  options.baseUrl = process.env.STITCH_URL;
}

let stitchClient = new StitchClient(APP_ID, options);

class App extends Component {
  state = {tab: 'map'}

  changeTabs = tab => {
    this.setState({tab: tab});
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Trash App!</h1>
          <div className="App-nav-bar">
            <div className="App-title" onClick={() => this.changeTabs('map')}>Map</div>
            <div className="App-title" onClick={() => this.changeTabs('guide')}>Guide</div>
          </div>
        </header>
        <AuthControls client={stitchClient} />
        { this.state.tab === 'map' &&
          <SimpleMap client={stitchClient}/>
        }
        {
          this.state.tab === 'guide' &&
          <ProductMatrix/>
        }
      </div>
    );
  }
}

export default App;