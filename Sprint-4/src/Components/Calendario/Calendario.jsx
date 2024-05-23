function Calendario() {
    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');

        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            events: [
                {
                    title: 'Event 1',
                    start: '2024-05-01'
                },
                {
                    title: 'Event 2',
                    start: '2024-05-05',
                    end: '2024-05-07'
                }
            ]
        });

        calendar.render();
    });
    return ( 
        <div id='calendar'></div>
     );
}

export default Calendario;