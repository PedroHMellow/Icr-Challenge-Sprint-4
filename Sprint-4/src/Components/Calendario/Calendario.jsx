import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid"
import allLocales from '@fullcalendar/core/locales-all'; 

export default function Calendar() {
  const handleDateClick = (arg) => {
    alert(arg.dateStr)
  }

  return (
    <FullCalendar
      plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
      dateClick={handleDateClick}
      locales={allLocales}
      locale='pt-br'
      headerToolbar = {{
        start: "today prev,next",
        center: "title",
        end: "dayGridMonth, timeGridWeek, timeGridDay"
      }}
      events={[
        { title: 'retirada de exame', start: '2024-05-23T06:30:00-03:00', end: '2024-05-29T18:00:00-03:00' },
        { title: 'Exame de Sangue', date: '2024-05-18' }
        ]}
    />
  )
}