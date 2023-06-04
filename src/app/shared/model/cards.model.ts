import { exercises } from '../constant/gymList';
import { ExerciseModel } from './exercises.model';
export interface CardModel {
  id: number;
  name: string;
  linkedExercises: {
    workTime: number;
    sleepTime: number;
    roundNumber: number;
    linkedExercise: ExerciseModel;
    isChecked: boolean;
  }[];
}
