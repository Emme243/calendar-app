import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/sass/styles.scss';

export const CalendarScreen = () => {
  // Setup the localizer by providing the moment (or globalize, or Luxon) Object
  // to the correct localizer.
  const localizer = momentLocalizer(moment);
  const events = [
    {
      title: 'Cumpleaños del jefe',
      start: moment().toDate(),
      end: moment().add(2, 'hours').toDate(),
      bgColor: '#fafafa',
    },
  ];

  return (
    <div className="h-[80vh] w-full">
      <h1>Calendar Screen</h1>
      <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" />
    </div>
  );
};
