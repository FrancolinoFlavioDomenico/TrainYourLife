import { filter } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { cards } from '../shared/constant/gymList';
import { CardModel } from '../shared/model/cards.model';
import { ExerciseModel } from '../shared/model/exercises.model';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss'],
})
export class WorkoutListComponent implements OnInit {
  public otherCardList = cards.slice(2, cards.length);

  public currentCardExercise: ExerciseModel[] = [];

  constructor() {}

  public ngOnInit(): void {
    cards[1].linkedExercises.forEach((item) => {
      if (item.isChecked) {
        this.currentCardExercise.push(item.exercise);
      }
    });
  }

  public getWorkPageUrl(cardId: number): string {
    return '/allenamenti/' + (cardId + 2);
  }
}
