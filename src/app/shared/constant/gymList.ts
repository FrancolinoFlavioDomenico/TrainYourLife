import { CardModel } from '../model/cards.model';
import { ExerciseModel } from '../model/exercises.model';

export const course = [
  'funzionale',
  'sala attrezzi',
  'kick boxig',
  'danza aerea',
];

export const exercises: ExerciseModel[] = [
  { id: 0, name: null, description: null, mediaUrl: null },
  { id: 1, name: 'Jumping jack', description: 'string', mediaUrl: 'string' },
  { id: 2, name: 'Crunch', description: 'string', mediaUrl: 'string' },
  { id: 3, name: 'Panca piana', description: 'string', mediaUrl: 'string' },
  { id: 4, name: 'Tapis rulant', description: 'string', mediaUrl: 'string' },
];

export const cards: CardModel[] = [
  {
    id: 0,
    name: null,
    linkedExercises: [
      {
        workTime: null,
        sleepTime: null,
        roundNumber: null,
        exercise: exercises[0],
        isChecked: false,
      },
      {
        workTime: null,
        sleepTime: null,
        roundNumber: null,
        exercise: exercises[1],
        isChecked: false,
      },
      {
        workTime: null,
        sleepTime: null,
        roundNumber: null,
        exercise: exercises[2],
        isChecked: false,
      },
      {
        workTime: null,
        sleepTime: null,
        roundNumber: null,
        exercise: exercises[3],
        isChecked: false,
      },
      {
        workTime: null,
        sleepTime: null,
        roundNumber: null,
        exercise: exercises[4],
        isChecked: false,
      },
    ],
  },
  {
    id: 1,
    name: 'Scehda odierna',
    linkedExercises: [
      {
        workTime: 2,
        sleepTime: 0.5,
        roundNumber: 2,
        exercise: exercises[1],
        isChecked: true,
      },
      {
        workTime: 0,
        sleepTime: 0,
        roundNumber: 0,
        exercise: exercises[2],
        isChecked: false,
      },
      {
        workTime: 2,
        sleepTime: 0.5,
        roundNumber: 3,
        exercise: exercises[3],
        isChecked: true,
      },
      {
        workTime: 2,
        sleepTime: 0.5,
        roundNumber: 2,
        exercise: exercises[4],
        isChecked: true,
      },
    ],
  },
  {
    id: 2,
    name: 'Cardio',
    linkedExercises: [
      {
        workTime: 2,
        sleepTime: 0.5,
        roundNumber: 2,
        exercise: exercises[1],
        isChecked: true,
      },
      {
        workTime: 0,
        sleepTime: 0,
        roundNumber: 0,
        exercise: exercises[2],
        isChecked: false,
      },
      {
        workTime: 2,
        sleepTime: 0.5,
        roundNumber: 3,
        exercise: exercises[3],
        isChecked: true,
      },
      {
        workTime: 2,
        sleepTime: 0.5,
        roundNumber: 2,
        exercise: exercises[4],
        isChecked: true,
      },
    ],
  },
];
