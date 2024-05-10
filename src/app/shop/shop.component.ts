import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    editable: true,
    droppable: true,
    dateClick: (arg) => this.handleDateClick(arg),
    events: [
      { title: 'event 1', date: '2024-05-15' },
      { title: 'event 3', date: '2024-05-20' },
    ],
    weekends: true,
  };

  handleDateClick(arg: any) {
    console.log('date click! ' + arg.dateStr);
  }

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends;
  }
}
