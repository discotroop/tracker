import React from 'react';
import logo from './logo.svg';
import './App.css';
import tracks from './logic/tracker.js';

const TrackerLogic = tracks();

function testingFunction() {
  const testing = "testing";
  return (
    <div> {testing} </div>
  );
}

function App() {
  let tests = TrackerLogic.tracks;

  function populateTracks() {
    const tracks = tests;
    const renderedTracks = tracks.map((track) => <li key={track.text}>{track.text}</li>);
    
      return (
        <div> {renderedTracks} </div>
      );
  }
  return (
    <div className="App">
      <div className="Header">
        <div className="Title"> <a href="#"> Title/Logo </a> </div>
        <div className="User"> <a href="#"> User </a> </div>
      </div>
      <div className="ResultBox">
        <div> {tests[0].text}</div>
        <div> {tests[1].text}</div> 
        <div> {tests[2].text}</div>   
      </div>
      <div className="Tracks">
        <div className="Folder">
          <ul>
            <li> <a href="#">All </a> </li>
            <li> <a href="#"> Other </a> </li>
            <li> <a href="#"> Other 2 </a> </li>
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
            <testingFunction></testingFunction>
            <populateTracks></populateTracks>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
