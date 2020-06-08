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

class NewTrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {    
    this.setState({value: event.target.value});  
  }
  handleSubmit(event) {
    alert('You added a track: ' + this.state.value);
    this.props.build(this.state.value);
    this.props.populate();
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          New Track:
          <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
        <input type="submit" value="Add Track" />
      </form>
    );
  }
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
      <div>
      <div className="TestCalendar">
        <RenderedDates dates={this.state.logic.calendar}></RenderedDates>
      </div>
      <div>
        <NewTrackForm build={this.state.logic.buildTrack} populate={this.state.logic.populateCalendar} />
      </div>
      </div>
    );
  }
}

export default Calendar;