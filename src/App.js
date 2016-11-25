import React, { Component } from 'react';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import './App.css';
import events from './events';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class App extends Component {
  render() {
    return (
      <BigCalendar
        {...this.props}
        events={events}
        titleAccessor='label'
        defaultDate={new Date(2016, 11, 1)}
      />
    );
  }
}

export default App;
