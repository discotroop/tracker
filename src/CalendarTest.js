import React, { Component } from 'react';
import Logic from './logic/logic.js';

const logic = Logic();
logic.buildTrack("testing calendar");
logic.buildTrack("testing calendar");
logic.buildTrack("testing calendar");

logic.populateCalendar();


function RenderedDates(props) {
    return (
      <div className="calendar">
      {props.dates.map(date => (
        <div className="date" key={date.dateString}>{date.count}</div>
      ))}
    </div>
    )
  }

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = { 
        logic: logic
     };
  }

  render() {
    return (
      <div className="TestCalendar">
        <RenderedDates dates={logic.calendar}></RenderedDates>
      </div>
    );
  }
}

export default Calendar;