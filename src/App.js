import React from 'react';
import logo from './logo.svg';
import './App.css';
import tracks from './logic/tracker.js';

const TrackerLogic = tracks();

function App() {
  let test = TrackerLogic.tracks;
  return (
    <div className="App">
      <div className="Header">
        <div className="Title"> <a href="#"> Title/Logo </a> </div>
        <div className="User"> <a href="#"> User </a> </div>
      </div>
      <div className="ResultBox">
        <div> {test[0]}</div>
        <div> {test[1]}</div> 
        <div> {test[2]}</div>   
      </div>
      <div className="Tracks">
        <div className="Folder">
          <ul>
            <li> All </li>
            <li> Other </li>
            <li> Other 2 </li>
          </ul>
        </div>
        <div className="TrackHolder">
          <div className="TrackHeader">
            <div className="TrackTitle"> Tracks </div>
            <div className="NewTrack"> 
              <button> New Track </button>
            </div>
          </div>
          <div className="CurrentTracks">
            here there be tracks
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
