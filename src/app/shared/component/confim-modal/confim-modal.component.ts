import { AfterViewChecked, Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confim-modal',
  templateUrl: './confim-modal.component.html',
  styleUrls: ['./confim-modal.component.scss'],
})
export class ConfimModalComponent implements OnInit, AfterViewChecked {
  constructor(
    private _dialogRef: MatDialogRef<ConfimModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dataFromParent: { msgBody: string; isSuccessfulModal: boolean }
  ) {}

  public ngOnInit(): void {}

  public ngAfterViewChecked(): void {
    try {
      if (this.dataFromParent?.isSuccessfulModal) {
        setTimeout(() => this._dialogRef.close(false), 3000);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public onCancel(): void {
    this._dialogRef.close(false);
  }

  public onConfirm(): void {
    this._dialogRef.close(true);
  }
}
