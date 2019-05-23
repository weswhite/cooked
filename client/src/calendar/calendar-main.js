import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = BigCalendar.momentLocalizer(moment)

function CalendarMain() {
    const events = [
        {
            title: "Test",
            start: "Wed May 22 2019 18:27:04 GMT-0500 (Central Daylight Time)",
            end:  "Wed May 23 2019 18:28:48 GMT-0500 (Central Daylight Time)",
            allDay: true
        }
    ]

    return (
        <>
            <BigCalendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                defaultView="month"
                views={['month']}
            />
        </>
    )
}

export default CalendarMain