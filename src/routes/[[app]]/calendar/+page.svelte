<script>
    // @ts-ignore
    import Calendar from '@event-calendar/core';
    // @ts-ignore
    import TimeGrid from '@event-calendar/time-grid';

    let plugins = [TimeGrid];
    let options = {
        view: 'timeGridWeek',
        events: [
            // your list of events
        ]
    };
</script>

<div class="w-screen p-5">
    <Calendar {plugins} {options} />
</div>
