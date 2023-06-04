import { CardModel } from '../model/cards.model';
import { ExerciseModel } from '../model/exercises.model';

export const course = [
  'funzionale',
  'sala attrezzi',
  'kick boxig',
  'danza aerea',
];

export const exercises: ExerciseModel[] = [
  { id: 0, name: 'Jumping jack', description: 'string', mediaUrl: 'string' },
  { id: 1, name: 'Crunch', description: 'string', mediaUrl: 'string' },
  { id: 2, name: 'Panca piana', description: 'string', mediaUrl: 'string' },
  { id: 3, name: 'Tapis rulant', description: 'string', mediaUrl: 'string' },
];

export const cards: CardModel[] = [
  {
    id: 0,
    name: 'Nuova scheda',
    linkedExercises: [
      {
        workTime: 2,
        sleepTime: 0.5,
        roundNumber: 2,
        linkedExercise: exercises[0],
        isChecked: false,
      },
      {
        workTime: 2,
        sleepTime: 0.5,
        roundNumber: 2,
        linkedExercise: exercises[1],
        isChecked: false,
      },
      {
        workTime: 2,
        sleepTime: 0.5,
        roundNumber: 2,
        linkedExercise: exercises[2],
        isChecked: false,
      },
      {
        workTime: 2,
        sleepTime: 0.5,
        roundNumber: 2,
        linkedExercise: exercises[3],
        isChecked: false,
      },
    ],
  },
  {
    id: 1,
    name: 'Cardio',
    linkedExercises: [
      {
        workTime: 2,
        sleepTime: 0.5,
        roundNumber: 2,
        linkedExercise: exercises[0],
        isChecked: true,
      },
    ],
  },
];
