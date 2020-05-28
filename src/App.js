import React from 'react';
import logo from './logo.svg';
import './App.css';
import tracks from './logic/tracker.js';

const TrackerLogic = tracks();

function App() {
  let test = TrackerLogic.tracks;
  return (
    <div className="App">
      <div> {test[0]}</div>
      <div> {test[1]}</div> 
      <div> {test[2]}</div>   
    </div>
  );
}

export default App;
