import { getRandomDate } from '../function/globalFunction';
import { EventModel } from '../model/event.model';

export const eventList: EventModel[] = [
  {
    date: getRandomDate(0, 10),
    name: 'sessione privata con marco rossi',
  },
  {
    date: getRandomDate(3, 10),
    name: 'funzionale  con rita',
  },
  {
    date: getRandomDate(0, 20),
    name: 'correttiva',
  },
];
