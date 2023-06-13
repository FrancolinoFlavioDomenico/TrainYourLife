import { CardModel } from 'src/app/shared/model/cards.model';
import { ExerciseModel } from './../../shared/model/exercises.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { cards } from 'src/app/shared/constant/gymList';
import { MatDialog } from '@angular/material/dialog';
import { ConfimModalComponent } from 'src/app/shared/component/confim-modal/confim-modal.component';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnInit {
  public card: CardModel;
  public totalExerciseOfCard: number;
  public exerciseList: ExerciseModel[] = [];
  public exerciseIndex = 0;
  public activeCardExercise: {
    workTime: number;
    sleepTime: number;
    roundNumber: number;
    exercise: ExerciseModel;
    isChecked: boolean;
  }[];

  public currentTimeValue: number;
  public currentMaxTimeValue: number;
  public currentRound = 0;
  public currentRoundNumber: number;
  public currentMaxRoundNumber: number;

  public isSleeping = false;

  private _interval;

  constructor(
    private _activedRoute: ActivatedRoute,
    private _router: Router,
    private _modalServie: MatDialog
  ) {}

  public ngOnInit(): void {
    const cardId = this._activedRoute.snapshot.paramMap.get('exerciseId');

    this.card = cards[cardId];
    this.activeCardExercise = this.card.linkedExercises.filter(
      (item) => item.isChecked
    );
    this.totalExerciseOfCard = this.activeCardExercise.length;
    this.exerciseList = this.activeCardExercise.map((item) => {
      return item.exercise;
    });

    this.currentMaxRoundNumber =
      this.activeCardExercise[this.exerciseIndex].roundNumber;
    this.currentTimeValue =
      this.activeCardExercise[this.exerciseIndex].workTime;
    this.currentMaxTimeValue =
      this.activeCardExercise[this.exerciseIndex].workTime;
    this._updateWorkoutTimer();
  }

  private _updateWorkoutTimer(): void {
    this._interval = setInterval(() => {
      if (this.currentTimeValue <= 0) {
        clearInterval(this._interval);
        this.onWorkoutTimerAnd();
      } else this.currentTimeValue -= 10;
    }, 1);
  }

  public onWorkoutTimerAnd(): void {
    this.isSleeping = true;
    this.currentRound++;
    this.currentTimeValue =
      this.activeCardExercise[this.exerciseIndex].sleepTime;
    this.currentMaxTimeValue =
      this.activeCardExercise[this.exerciseIndex].sleepTime;
    this._updateSleepTimer();
  }

  private _updateSleepTimer(): void {
    this._interval = setInterval(() => {
      if (this.currentTimeValue <= 0) {
        clearInterval(this._interval);
        this._onSleepTimerEnd();
      } else this.currentTimeValue -= 10;
    }, 1);
  }

  private _onSleepTimerEnd(): void {
    this.isSleeping = false;
    if (this.currentRound === this.currentMaxRoundNumber) {
      if (this.totalExerciseOfCard === this.exerciseIndex + 1) {
        this._router.navigate(['/progressi']);
      } else {
        this.exerciseIndex++;
        this.currentRound = 0;
        this.currentMaxRoundNumber =
          this.activeCardExercise[this.exerciseIndex].roundNumber;
      }
    }
    this.currentTimeValue =
      this.activeCardExercise[this.exerciseIndex].workTime;
    this.currentMaxTimeValue =
      this.activeCardExercise[this.exerciseIndex].workTime;
    this._updateWorkoutTimer();
  }

  public convertMillisecondsToMinute(milliSecond: number): string {
    const minutes = Math.floor(milliSecond / 60000);
    const seconds = Math.round((milliSecond % 60000) / 1000);

    return seconds === 60
      ? `${minutes + 1}:00`
      : `${minutes}:${this._padTo2Digits(seconds)}`;
  }

  private _padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  public onNextClick(): void {
    if (this.totalExerciseOfCard === this.exerciseIndex + 1) {
      this._router.navigate(['/progressi']);
    } else {
      this.exerciseIndex++;
      this.currentRound = 0;
      this.currentMaxRoundNumber =
        this.activeCardExercise[this.exerciseIndex].roundNumber;
      this.currentTimeValue =
        this.activeCardExercise[this.exerciseIndex].workTime;
      this.currentMaxTimeValue =
        this.activeCardExercise[this.exerciseIndex].workTime;
      this._updateWorkoutTimer();
    }
  }

  public onRadioSelected(checkedValue): void {
    if (checkedValue == 2) {
      this._modalServie.open(ConfimModalComponent, {
        width: '300px',
        height: '50px',
        data: {
          msgBody: 'Risposta esatta',
          isSuccessfulModal: true,
        },
      });
    }
  }
}
