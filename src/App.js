import React, { Component } from 'react';
import './App.css';
import { StitchClient } from "mongodb-stitch";
import AuthControls from "./AuthControls";
import SimpleMap from "./SimpleMap";
import ProductMatrix from "./ProductMatrix";
import APP_ID from "./config";
import { Switch, Route, Link } from 'react-router-dom';

let options = {};
if (process.env.STITCH_URL) {
  options.baseUrl = process.env.STITCH_URL;
}

let stitchClient = new StitchClient(APP_ID, options);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Trash App!</h1>
          <div className="App-nav-bar">
            <Link to={'/map'}><div className="App-title">Map</div></Link>
            <Link to={'/guide'}><div className="App-title">Guide</div></Link>
          </div>
          <AuthControls client={stitchClient} />
        </header>
        <div>
          <Switch>
            <Route path='/map' render={()=> <SimpleMap client={stitchClient}/>}/>
            <Route path='/guide' render={()=> <ProductMatrix client={stitchClient}/>}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;