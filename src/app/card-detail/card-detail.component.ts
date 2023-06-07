import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfimModalComponent } from '../shared/component/confim-modal/confim-modal.component';
import { cards, exercises } from '../shared/constant/gymList';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ExerciseModel } from '../shared/model/exercises.model';
import { CardModel } from '../shared/model/cards.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardDetailComponent implements OnInit {
  public list = exercises.slice(1, exercises.length);

  public titlePage: string;
  public cardId: number;
  public card: CardModel;

  constructor(
    private _modalServie: MatDialog,
    private _ActiveRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    let cardId = this._ActiveRoute.snapshot.paramMap.get('id');
    this.card = cards[cardId];
    this.titlePage = this.card.name;
  }

  public onConfirmClick(): void {
    this._modalServie.open(ConfimModalComponent, {
      width: '300px',
      height: '50px',
      data: {
        msgBody: 'Operazione avvenuta con successo',
        isSuccessfulModal: true,
      },
    });
  }

  public getCheckValue(i: ExerciseModel): boolean {
    return !!this.card.linkedExercises.find(
      (item) => item.isChecked && item.exercise === i
    );
  }

  public getInputValue(inputName: string, i: ExerciseModel): string | number {
    let tmp = this.card.linkedExercises.find(
      (item) => item.isChecked && item.exercise === i
    );
    if (!!tmp) {
      return tmp[inputName];
    } else {
      return null;
    }
  }
}
