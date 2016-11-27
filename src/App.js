import React, { Component } from 'react';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import axios from 'axios';

import './App.css';
import events from './events.json';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class App extends Component {

  componentWillMount() {
    axios.get('https://assessments.bzzhr.net/calendar/?format=json')
      .then(response => {
        if (response.data) {
          this.setState({ events: response.data })
        }
      })
      .catch(function (error) {
        console.log(error);
        this.setState({ events: events })
      });
  }
  eventGetter(eventObj) {
    return { style: { backgroundColor: eventObj.category } }
  }
  render() {
    return (
      <BigCalendar
        events={this.state ? this.state.events : []}
        eventPropGetter={this.eventGetter}
        titleAccessor='label'
        defaultDate={new Date(2016, 11, 1)}
        />
    );
  }
}

export default App;
