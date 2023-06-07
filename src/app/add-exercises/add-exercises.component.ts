import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cards, exercises } from '../shared/constant/gymList';
import { ExerciseModel } from '../shared/model/exercises.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfimModalComponent } from '../shared/component/confim-modal/confim-modal.component';

@Component({
  selector: 'app-add-exercises',
  templateUrl: './add-exercises.component.html',
  styleUrls: ['./add-exercises.component.scss'],
})
export class AddExercisesComponent implements OnInit {
  public titlePage: string;
  public exercise: ExerciseModel;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _modalService: MatDialog
  ) {}

  public ngOnInit(): void {
    this.exercise = exercises[this._activeRoute.snapshot.paramMap.get('id')];
    this.titlePage = this.exercise.name;
  }

  public onConfirmClick(): void {
    this._modalService.open(ConfimModalComponent, {
      width: '300px',
      height: '50px',
      data: {
        msgBody: 'Operazione avvenuta con successo',
        isSuccessfulModal: true,
      },
    });
  }
}
