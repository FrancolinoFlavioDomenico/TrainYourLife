import { ClientModel } from '../model/client.model';
import { CoachModel } from '../model/coach.model';

export const coachList: CoachModel[] = [
  {
    id: 0,
    name: 'Mario',
    surname: 'Rossi',
    age: 35,
    bio: 'Lorem',
    studyTitle: ['Laurea'],
    offeredCourse: ['body building'],
  },
  {
    id: 1,
    name: 'Rita',
    surname: 'Verdi',
    age: 35,
    bio: 'da 20 anni insegna con passione e dedizione',
    studyTitle: ['Laurea'],
    offeredCourse: ['body building', 'funzionale'],
  },
  {
    id: 2,
    name: 'Marco',
    surname: 'Rossi',
    age: 35,
    bio: 'Lorem',
    studyTitle: ['Laurea'],
    offeredCourse: ['kick boxing', 'funzionale'],
  },
  {
    id: 3,
    name: 'Tommaso',
    surname: 'Giallo',
    age: 35,
    bio: 'Lorem',
    studyTitle: ['Laurea'],
    offeredCourse: ['body building'],
  },
];

export const clientList: ClientModel[] = [
  {
    id: 0,
    name: 'Mario',
    surname: 'Rossi',
    age: 35,
    bio: 'Lorem',
  },
  {
    id: 1,
    name: 'Rita',
    surname: 'Verdi',
    age: 35,
    bio: 'da 20 anni insegna con passione e dedizione',
  },
  {
    id: 2,
    name: 'Marco',
    surname: 'Rossi',
    age: 35,
    bio: 'Lorem',
  },
  {
    id: 3,
    name: 'Tommaso',
    surname: 'Giallo',
    age: 35,
    bio: 'Lorem',
  },
];
