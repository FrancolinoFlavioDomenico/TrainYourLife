import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { course } from 'src/app/shared/constant/gymList';

@Component({
  selector: 'app-add-reservation-modal',
  templateUrl: './add-reservation-modal.component.html',
  styleUrls: ['./add-reservation-modal.component.scss'],
})
export class AddReservationModalComponent implements OnInit {
  public courseList = course;
  public reservationForm: FormGroup;

  constructor(
    private _dialogRef: MatDialogRef<AddReservationModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dataFromParent: { date: Date; course: string; time: string }
  ) {}

  public ngOnInit(): void {
    this.reservationForm = new FormGroup({
      date: new FormControl(
        !!this.dataFromParent ? this.dataFromParent.date : null,
        Validators.required
      ),
      time: new FormControl(
        !!this.dataFromParent ? this.dataFromParent.time : null,
        Validators.required
      ),
      course: new FormControl(
        !!this.dataFromParent
          ? this.courseList[this.dataFromParent.course]
          : null,
        Validators.required
      ),
    });
  }

  public onCancel(): void {
    this._dialogRef.close(false);
  }

  public onConfirm(): void {
    this._dialogRef.close(true);
  }
}
