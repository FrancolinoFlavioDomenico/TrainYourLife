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
  {
    id: 1,
    name: 'Jumping jack',
    description: 'Saltellare alternando chiusura della gambe e delle braccia',
    mediaUrl: '../../../assets/media/exerciseGif/jumpingJacks.gif',
  },
  {
    id: 2,
    name: 'Crunch',
    description:
      'Sdraito di schiena in terra porre le braccia in avanti e sollevare il busto',
    mediaUrl: '../../../assets/media/exerciseGif/crunch.gif',
  },
  {
    id: 3,
    name: 'Panca piana',
    description: 'Sdraiarsi di schiena sulla panca e sollevare il bilanciare',
    mediaUrl: '../../../assets/media/exerciseGif/pancaPiana.gif',
  },
  {
    id: 4,
    name: 'Tapis rulant',
    description: 'Impostare il il tapis rulant a velocita 5',
    mediaUrl: '../../../assets/media/exerciseGif/tapisRulant.gif',
  },
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
    name: 'Scheda odierna',
    linkedExercises: [
      {
        workTime: 120000,
        sleepTime: 30000,
        roundNumber: 2,
        exercise: exercises[1],
        isChecked: true,
      },
      {
        workTime: 120000,
        sleepTime: 30000,
        roundNumber: 2,
        exercise: exercises[2],
        isChecked: true,
      },
      {
        workTime: 120000,
        sleepTime: 30000,
        roundNumber: 3,
        exercise: exercises[3],
        isChecked: true,
      },
      {
        workTime: 120000,
        sleepTime: 30000,
        roundNumber: 2,
        exercise: exercises[4],
        isChecked: false,
      },
    ],
  },
  {
    id: 2,
    name: 'Cardio',
    linkedExercises: [
      {
        workTime: 120000,
        sleepTime: 30000,
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
        workTime: 120000,
        sleepTime: 30000,
        roundNumber: 3,
        exercise: exercises[3],
        isChecked: true,
      },
      {
        workTime: 120000,
        sleepTime: 30000,
        roundNumber: 2,
        exercise: exercises[4],
        isChecked: true,
      },
    ],
  },
];
