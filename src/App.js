import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './App.css';
import { StitchClient } from "mongodb-stitch";
import AuthControls from "./AuthControls";
import SimpleMap from "./SimpleMap";

let appId = "<YOUR-APP-ID-HERE>";
if (process.env.APP_ID) {
  appId = process.env.APP_ID;
}

let options = {};
if (process.env.STITCH_URL) {
  options.baseUrl = process.env.STITCH_URL;
}

let stitchClient = new StitchClient(appId, options);
let db = stitchClient.service("mongodb", "mongodb-atlas").db("locations");
let users = db.collection("users");

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Trash App!</h1>
        </header>
        <AuthControls client={stitchClient} />
        <SimpleMap client={stitchClient}/>
      </div>
    );
  }
}

export default App;